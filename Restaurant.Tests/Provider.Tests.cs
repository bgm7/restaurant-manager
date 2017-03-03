using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Restaurant.Core;
using System.Linq;

namespace Restaurant.Tests
{
    [TestClass]
    public class Provider
    {
        [TestMethod]
        public void CreateDataBase_RestaurantMenu()
        {
            var dbContext = GetDbContext();

            var result = dbContext.Database.CreateIfNotExists();

            Assert.IsTrue(result);
        }

        [TestMethod]
        public void AddRestaurant()
        {
            var dbContext = GetDbContext();

            var rest = new Core.Restaurant()
            {
                Name = "Restaurante Teste"
            };


            dbContext.Restaurants.Add(rest);
            var result = dbContext.SaveChanges();

            Assert.IsTrue(result == 1);
        }

        [TestMethod]
        public void AddDish()
        {
            var dbContext = GetDbContext();

            var restaurant = dbContext.Restaurants.FirstOrDefault();

            if (restaurant == null)
                Assert.Fail("Não há nenhum restaurante registrado.");

            var dish = new Core.Dish()
            {
                Name = "Teste Prato",
                RestaurantId = restaurant.Id,
                Price = 77.77M
            };


            dbContext.Dishes.Add(dish);
            var result = dbContext.SaveChanges();

            Assert.IsTrue(result == 1);
        }

        private RestaurantMenuContext GetDbContext()
        {
            return new RestaurantMenuContext();
        }
    }
}




