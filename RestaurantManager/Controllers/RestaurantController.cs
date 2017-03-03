using Restaurant.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RestaurantManager.Controllers
{
    public class RestaurantController : Controller
    {
        private RestaurantMenuContext _dbContext;

        public RestaurantController()
        {
            _dbContext = new RestaurantMenuContext();
        }
        
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetRestaurants()
        {
            return Json(_dbContext.Restaurants.ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetRestaurantById(int id)
        {
            return Json(_dbContext.Restaurants.FirstOrDefault(r => r.Id == id), JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetRestaurantByName(string name)
        {
            return Json(_dbContext.Restaurants.FirstOrDefault(r => r.Name == name), JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetRestaurantsByName(string name)
        {
            return Json(_dbContext.Restaurants.Where(r => r.Name.Contains(name)), JsonRequestBehavior.AllowGet);
        }

        public JsonResult AddRestaurant(Restaurant.Core.Restaurant restaurant)
        {
            _dbContext.Restaurants.Add(restaurant);
            _dbContext.SaveChanges();

            return GetRestaurants();
        }

        public JsonResult UpdateRestaurant(Restaurant.Core.Restaurant restaurant)
        {
            _dbContext.Entry(restaurant).State = System.Data.Entity.EntityState.Modified;
            _dbContext.SaveChanges();

            return GetRestaurants();
        }

        public JsonResult DeleteRestaurant(int id)
        {
            var restaurant = _dbContext.Restaurants.FirstOrDefault(r => r.Id == id);

            if (restaurant != null)
            {
                foreach (var dish in _dbContext.Dishes.Where(f => f.RestaurantId == id))
                {
                    _dbContext.Dishes.Remove(dish);
                }

                _dbContext.Restaurants.Remove(restaurant);
            }

            _dbContext.SaveChanges();

            return GetRestaurants();
        }
    }
}