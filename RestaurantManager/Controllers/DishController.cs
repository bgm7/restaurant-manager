using Restaurant.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RestaurantManager.Controllers
{
    public class DishController : Controller
    {
        private RestaurantMenuContext _dbContext;

        public DishController()
        {
            _dbContext = new RestaurantMenuContext();
        }
        
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetDishes()
        {
            return Json(_dbContext.Dishes.ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetDishById(int id)
        {
            return Json(_dbContext.Dishes.FirstOrDefault(r => r.Id == id), JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetDishByName(string name)
        {
            return Json(_dbContext.Dishes.FirstOrDefault(r => r.Name == name), JsonRequestBehavior.AllowGet);
        }

        public JsonResult AddDish(Dish dish)
        {
            _dbContext.Dishes.Add(dish);
            _dbContext.SaveChanges();

            return GetDishes();
        }

        public JsonResult UpdateDish(Dish dish)
        {
            _dbContext.Entry(dish).State = System.Data.Entity.EntityState.Modified;
            _dbContext.SaveChanges();

            return GetDishes();
        }

        public JsonResult DeleteDish(int id)
        {
            var dish = _dbContext.Dishes.FirstOrDefault(r => r.Id == id);

            if (dish != null)
                _dbContext.Dishes.Remove(dish);
            
            _dbContext.SaveChanges();

            return GetDishes();
        }
    }
}