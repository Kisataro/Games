using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Repo;
using API.Interfaces;

namespace API.Data
{
    public class UnitOfWork : IUnitOfWork
    {

        private readonly DataContext dc;

        public UnitOfWork(DataContext dc) {
            this.dc = dc;
        }

        public IUserRepository UserRepository => 
            new UserRepository(dc);

        public async Task<bool> SaveAsync()
        {
            return await dc.SaveChangesAsync() > 0;
        }
    }
}