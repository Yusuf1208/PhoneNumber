using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PhoneNumber.API.Data;
using PhoneNumber.API.Models;

namespace PhoneNumber.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonsController : Controller
    {
        private readonly PhoneNumberDbContext _phoneNumberDbContext;

        public PersonsController(PhoneNumberDbContext phoneNumberDbContext)
        {
            _phoneNumberDbContext = phoneNumberDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllPersons()
        {
            var persons = await _phoneNumberDbContext.Persons.ToListAsync();
            
            return Ok(persons);

        }


        [HttpPost]
        public async Task<IActionResult > AddPerson([FromBody] Person personRequest)
        {
            personRequest.Id= Guid.NewGuid();   

            await _phoneNumberDbContext.Persons.AddAsync(personRequest);
            await _phoneNumberDbContext.SaveChangesAsync();

            return Ok(personRequest);
        }


        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetPerson([FromRoute] Guid id) 
        {
            var person=
                await _phoneNumberDbContext.Persons.FirstOrDefaultAsync(x => x.Id == id);

            if(person == null)
            {
                return NotFound();
            }

            return Ok(person);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdatePerson([FromRoute] Guid id, Person updatePersonRequest)
        {
            var person = await _phoneNumberDbContext.Persons.FindAsync(id);

            if(person == null)
            {
                return NotFound();
            }

            person.Name = updatePersonRequest.Name;
            person.Email = updatePersonRequest.Email;
            person.Salary = updatePersonRequest.Salary;
            person.Phone = updatePersonRequest.Phone;
            person.Department = updatePersonRequest.Department;


            await _phoneNumberDbContext.SaveChangesAsync();

            return Ok(person);

        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeletePerson([FromRoute] Guid id)
        {
            var person = await _phoneNumberDbContext.Persons.FindAsync(id);
            
            if (person == null)
            {
                return NotFound();
            }

            _phoneNumberDbContext.Persons.Remove(person);
            await _phoneNumberDbContext.SaveChangesAsync();

            return Ok();

        }

    }
}
