using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurant.Core
{
    public class RestaurantMenuContext : DbContext
    {
        public RestaurantMenuContext()
            : base("RestaurantMenu")
        {
        }

        public DbSet<Restaurant> Restaurants { get; set; }
        public DbSet<Dish> Dishes { get; set; }
    }
}
