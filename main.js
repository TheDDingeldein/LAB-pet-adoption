//console.log("Pet Adoption");
const pets = [
    {
      id: 01,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "Cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      id: 02,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "Dino",
      imageUrl: "https://i.natgeofe.com/n/d4492040-e42e-4c0b-9604-3b1ddea67f88/FInal-Submission_NJG_square.jpg"
    },
    {
      id: 03,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "Dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 04,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "Dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 05,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "Cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 06,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "Dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 07,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "Cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 08,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "Dino",
      imageUrl: "https://i.natgeofe.com/n/0332addf-13a8-42eb-bd59-c47aa3d05632/Fig4.jpg"
    },
    {
      id: 09,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "Cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "Cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "Dino",
      imageUrl: "https://i.ytimg.com/vi/qhepysLkX0Q/maxresdefault.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "Dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "Dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "Cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "Cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "Dino",
      imageUrl: "https://i.natgeofe.com/n/d4492040-e42e-4c0b-9604-3b1ddea67f88/FInal-Submission_NJG_square.jpg"
    },
    {
      id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "Cat",
      imageUrl: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "Dino",
      imageUrl: "https://i.guim.co.uk/img/media/369988bfc18e14869c0c65ae6ba660c04334d7cb/0_483_2794_1677/master/2794.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=debf12a0dd6882e25ee61e33e9012c1c"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "Dog",
      imageUrl: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "Cat",
      imageUrl: "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "Dino",
      imageUrl: "https://cdn.vox-cdn.com/thumbor/Oj4tP0Gvia5G13JQpcfjVf7gcew=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11565113/2482_TP2_00070R_v1_current.jpg"
    },
    {
      id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "Cat",
      imageUrl: "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg"
    },
    {
      id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "Dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "Dog",
      imageUrl: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "Cat",
      imageUrl: "data:image/jpeg;base64,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"
    },
    {
      id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "Dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "Dino",
      imageUrl: "https://media.npr.org/assets/img/2020/08/04/gettyimages-166352928-1-1_wide-7ca313d19c03d1447250fc8863b68ec60fa96661-s1100-c50.jpg"
    },
    {
      id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "Cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "Cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "Dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7gFTwWnpsh5Higt49cnrPzVV2XaealA-GVBZswahODo679UBc_AIi0qAfvSuKOBLCU0&usqp=CAU"
    }
  ];

// const btnFilter = () => {
//   let domString = `
//   <div class="buttons">
//   <button type="button" class="btn btn-outline-primary">Primary</button>
//   <button type="button" class="btn btn-outline-success">Success</button>
//   <button type="button" class="btn btn-outline-warning">Warning</button>
//   <button type="button" class="btn btn-outline-light">Light</button>
// </div>
//   `;
//   renderToDom("#btnContainer", domString);
// };



const app = document.querySelector(".cardContainer");
let domString = "";

for (const adoption of pets) {
  domString += `<div class="card" style="width: 18rem;">
    <img src="${adoption.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">ID# = ${adoption.id}</p>
        <p class="card-text">Name = ${adoption.name}</p>
        <p class="card-text">Special Skill = ${adoption.specialSkill}</p>
        <p class="card-text">Color = ${adoption.color}</p>
        <p class="card-text">Type of pet = ${adoption.type}</p>
      </div>
  </div>`
}

app.innerHTML = domString;
