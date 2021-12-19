using Kurs.DAL;
using Microsoft.EntityFrameworkCore;
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kurs.BL
{
    public class SiteService
    {
        private readonly ApplicationContext context;

        public SiteService(ApplicationContext _context)
        {
            context = _context;
        }

        public async Task<List<CardDTO>> GetCards(int type)
        {
            var card =  await context.Card.Where(p => ((int)p.Type).Equals(type)).ToListAsync();
            var cards = card.Select(p => ToDTO(p)).ToList();
            var cardsId = cards.Select(i => i.Id).ToList();
            var images = context.Image.Where(u => cardsId.Contains(u.CardId)).ToList();
            //cards.ForEach(p => p.Images.AddRange(images.Where(u => u.CardId.Equals(p.Id)).ToList() ?? new List<Image>()));
            images.ForEach(u => cards.First(p => p.Id.Equals(u.CardId)).Images.Add(u));
            //foreach(var i in images)
            //{
            //    var a = cards.Find(p => p.Id.Equals(i.CardId));
            //    a.Images.Add(i);
            //}
            return cards;
        }

        public async Task<CardDTO> GetCard(Guid id)
        {
            var card = await context.Card.FirstOrDefaultAsync(p => p.Id.Equals(id));
            var cardDTO = ToDTO(card);
            return cardDTO;
        }

        private CardDTO ToDTO(Card card)
        {
            CardDTO cardDTO = new CardDTO()
            {
                Id = card.Id,
                Description = card.Description,
                Title = card.Title,
                Type = card.Type
            };
            return cardDTO;
        }

    }
}
