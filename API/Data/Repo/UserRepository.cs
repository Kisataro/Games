using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using API.Interfaces;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Repo
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext dc;
        public UserRepository(DataContext dc)
        {
            this.dc = dc;
            
        }
        public async Task<User> Authenticate(string Username, string passwordText)
        {
            var user = await dc.Users.FirstOrDefaultAsync(x => x.Username == Username);

            if (user == null || user.PasswordKey == null) {
                return null;
            }

            if (!MatchPasswordHash(passwordText, user.Password, user.PasswordKey)) {
                return null;
            }

            return user;
            
        }

        private bool MatchPasswordHash(string passwordText, byte[] password, byte[] passwordKey)
        {
            using (var hmac = new HMACSHA512(passwordKey))
            {
                var passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(passwordText));

                for (int i=0; i<passwordHash.Length; i++)
                {
                    if (passwordHash[i] != password[i])
                        return false;
                }

                return true;
            }
        }

        public void Register(string Username, string Password)
        {
            byte[] passwordHash, passwordKey;

            using (var hmac = new HMACSHA512())
            {
                passwordKey = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(Password));
            }

            User user = new User();
            user.Username = Username;
            user.Password = passwordHash;
            user.PasswordKey = passwordKey;

            dc.Users.Add(user);
        }

        public async Task<bool> UserAlreadyExists(string Username)
        {
            return await dc.Users.AnyAsync(x => x.Username == Username);
        }
    }
}