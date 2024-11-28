const products = [
  {
    id: 1,
    name: "DreamNest",
    image:
      "https://i.pinimg.com/736x/65/f9/91/65f991cb146176908daa0c4171b023c9.jpg",
    price: "14500",
    category: "Furniture",
    details:  "A cozy bed designed for ultimate relaxation and deep sleep."
  },
  {
    id: 2,
    name: "Serenity Haven",
    image:
      "https://www.bedsland.co.uk/wp-content/uploads/2023/11/768c027c-3a98-4d61-80e0-f7eabbae2480.webp",
    price: "13500",
    category: "Furniture",
    details:  "A luxurious bed that promotes peace and tranquility in your sleep space."
  },
  {
    id: 3,
    name: "CloudRest",
    image:
      "https://fancyhouse-design.com/wp-content/uploads/2023/11/A-contemporary-bedroom-features-smart-home-technology-seamlessly-blended-into-its-luxury-design..jpg",
    price: "13500",
    category: "Furniture",
    details:  "A soft, plush bed that feels like sleeping on a cloud."
  },
  {
    id: 4,
    name: "EdenSleep",
    image:
      "https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2023/09/Indulge-In-Opulence-50-Luxurious-Bedroom-Decor-Ideas-32-1024x660.jpeg",
    price: "13500",
    category: "Furniture",
    details:  " A natural and eco-friendly bed crafted for restful nights."
  },
  {
    id: 5,
    name: "LuxeLoom",
    image:
      "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/spaces/bedrooms/7-stunning-master-bedroom-design-ideas/designs-for-bedroom.jpg",
    price: "13500",
    category: "Furniture",
    details:  "A premium bed with an elegant design and supreme comfort."
  },
  {
    id: 6,
    name: "ZenLayer",
    image:
      "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/spaces/bedrooms/7-stunning-master-bedroom-design-ideas/Title-master-bedroom-cupboard.jpg",
    price: "13500",
    category: "Furniture",
    details:  "A minimalist bed that supports mindfulness and balance."
  },
  {
    id: 7,
    name: "StellarFrame",
    image:
      "https://imgmedia.lbb.in/media/2023/08/64c8b6b3f619575fbd3f25c7_1690875571537.jpg",
    price: "13500",
    category: "Furniture",
    details:  "A sleek, modern bed built for durability and style."
  },
  {
    id: 8,
    name: "Harmony Plush",
    image:
      "https://dropinblog.net/34246798/files/featured/Brilliant_Tips_for_Stone_Types_Newbies.jpg",
    price: "13500",
    category: "Furniture",
    details:  "A hybrid bed combining softness and support for all-night comfort."
  },
  {
  id: 9,
  name: "ErgoChair Pro",
  image:
    "https://www.businessadvicefree.com/wp-content/uploads/2023/01/New-Office-In-Cirencester-2.jpeg",
  price: "22200",
  category: "Furniture",
  details:  "An ergonomic office chair designed for maximum comfort and posture support."
},
{
  id: 10,
  name: "FocusDesk",
  image:
    "https://www.exisglobal.com/wp-content/uploads/2023/03/open-closed-office-space-pros-cons.jpg",
  price: "19500",
  category: "Furniture",
  details:  " A spacious and adjustable desk built to enhance productivity and focus."
},
{
  id: 11,
  name: "TaskMate Cabinet",
  image:
    "https://www.collaborate.works/wp-content/uploads/2024/09/Small-Office-scaled.jpg",
  price: "21500",
  category: "Furniture",
  details:  "A compact storage unit for organizing files and office supplies efficiently."
},
{
  id: 12,
  name: "VisionBoard",
  image:
    "https://www.livehome3d.com/assets/img/articles/types-of-offices/modern-office-with-the-city-view.jpg",
  price: "16500",
  category: "Furniture",
  details:  " A sleek whiteboard for brainstorming, planning, and collaboration."
},
{
  id: 13,
  name: "Executive Crest Chair",
  image:
    "https://cdn.prod.website-files.com/66a08e07fa6352714fc1d6da/66a0ae222bacd723bca117f8_office-space-working-with-computers-office-equipment-3d-rendering-1-scaled.webp",
  price: "18000",
  category: "Furniture",
  details:  "A high-back leather chair that combines luxury and functionality for executives."
},
{
  id: 14,
  name: "SwiftSit Stool",
  image:
    "https://www.servcorp.co.uk/media/31723/green-office-space.jpg?format=webp&quality=80&width=688",
  price: "19000",
  category: "Furniture",
  details:  "A lightweight, adjustable stool for quick and flexible seating options."
},
{
  id: 15,
  name: "WorkFlow Podium",
  image:
    "https://svtech.com.vn/wp-content/uploads/2020/07/dexus-office-space.jpg",
  price: "19500",
  category: "Furniture",
  details:  "A standing desk converter that enables smooth transitions between sitting and standing."
},
{
  id: 16,
  name: "Streamline Shelf",
  image:
    "https://www.servcorp.com.sg/media/34628/how-much-office-space-per-person.jpg",
  price: "17500",
  category: "Furniture",
  details:  "A modern shelving unit for displaying and storing office essentials stylishly."
},
{
    id: 17,
    name: "EduDesk Pro",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/4/300051338/HZ/YH/EA/87166487/institutional-furniture-500x500.jpeg",
    price: "12500",
    category: "Furniture",
    details:  "A durable desk designed specifically for classrooms to support focused learning."
  },
  {
    id: 18,
    name: "LectureFlex Chair",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/12/GL/HI/YG/9307939/1-500x500.jpg",
    price: "12000",
    category: "Furniture",
    details:  " A versatile chair with an attached writing pad, ideal for lecture halls."
  },
  {
    id: 19,
    name: "Unity Bench",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/10/350616181/CK/HJ/VR/9307939/classroom-furniture-500x500.jpg",
    price: "13400",
    category: "Furniture",
    details:  "A sturdy seating solution for communal spaces like cafeterias or waiting areas."
  },
  {
    id: 20,
    name: "KnowledgePod Table",
    image:
      "https://furnitureconcepts.com/wp-content/uploads/2021/06/DSC5525-Web--1024x683.webp",
    price: "16400",
    category: "Furniture",
    details:  " A collaborative round table perfect for group discussions and teamwork."
  },
  {
    id: 21,
    name: "Campus Stack Chair",
    image:
      "https://www.tirupatioffice.com/file_upload/product/1587751086-d421ca3ec4c03dac5cb87174a244f1dd-floor%20ws%20-%20123.jpg",
    price: "14500",
    category: "Furniture",
    details:  "A lightweight, stackable chair designed for easy storage and versatile use."
  },
  {
    id: 22,
    name: "ScholarBoard",
    image:
      "https://www.pureofficesolutions.co.uk/wp-content/uploads/2019/11/STR501C-GR-1-900x600.jpg",
    price: "13500",
    category: "Furniture",
    details:  " A large, mobile whiteboard perfect for teaching and presentations."
  },
  {
    id: 23,
    name: "Library Haven Shelf",
    image:
      "https://i.pinimg.com/736x/8d/f3/41/8df341286e1db96018329a6208663d1b.jpg",
    price: "15500",
    category: "Furniture",
    details:  " A modular shelving unit optimized for storing books and institutional materials."
  },
  {
    id: 24,
    name: "Symmetry Lab Station",
    image:
      "https://5.imimg.com/data5/AS/VU/MY-6804265/a-500x500.jpg",
    price: "15000",
    category: "Furniture",
    details:  "A functional workstation designed for science labs and technical classrooms."
  },
  {
  id: 25,
  name: "HarvestTable",
  image:
    "https://cdn.decorilla.com/online-decorating/wp-content/uploads/2023/12/2024-dining-room-trends-and-lighting-trends-scaled.jpeg?width=900",
  price: "12500",
  category: "Furniture",
  details:  "A spacious dining table designed for family gatherings and shared meals."
},
{
  id: 26,
  name: "FeastBench",
  image:
    "https://www.thespruce.com/thmb/ZqfUoFjPOAqtJBpzjDw-sxRdiNQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/modern-dining-room-ideas-4147451-hero-d6333998f8b34620adfd4d99ac732586.jpg",
  price: "12000",
  category: "Furniture",
  details:  "A sturdy wooden bench ideal for casual and communal dining setups."
},
{
  id: 27,
  name: "Elegance Dine Chair",
  image:
    "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/10/modern-farmhouse-dining-room-ideas-.jpeg",
  price: "13400",
  category: "Furniture",
  details:  " A sleek, upholstered chair offering style and comfort for formal dining."
},
{
  id: 28,
  name: "RoundGather Table",
  image:
    "https://hips.hearstapps.com/hmg-prod/images/living-room-desig-ideas-655d38c1b117d.jpeg",
  price: "16400",
  category: "Furniture",
  details:  "A circular dining table perfect for intimate conversations and cozy meals."
},
{
  id: 29,
  name: "PlushSeat Dining Chair",
  image:
    "https://www.ikea.com/images/a-large-skogsta-dining-table-in-wood-with-four-matching-chai-6c01807ec93b8c77ced18058b4fafd5a.jpg",
  price: "15400",
  category: "Furniture",
  details:  "A cushioned chair designed for extended comfort during meals."
},
{
  id: 30,
  name: "RusticCharm Table",
  image:
    "https://cdn.shopify.com/s/files/1/0298/1577/files/Dining_Room_Furniture_Singapore_600x600.webp?v=1710835899",
  price: "13500",
  category: "Furniture",
  details:  "A farmhouse-style dining table crafted from reclaimed wood for a vintage look."
},
{
  id: 31,
  name: "ModDine Set",
  image:
    "https://www.ikea.com/ext/ingkadam/m/4e9d91fe42193dd8/original/PH200269.jpg",
  price: "15500",
  category: "Furniture",
  details:  "A modern dining table and chair set with clean lines and a minimalist design."
},
{
  id: 32,
  name: "GlassGrace Table",
  image:
    "https://www.ikea.com/images/a-dining-room-containing-lots-of-plants-and-a-nackanaes-dini-cf450624b9adc0b8eafda7d0afc54d90.jpg",
  price: "15000",
  category: "Furniture",
  details:  "A dining table with a tempered glass top, adding sophistication to any dining room."
},
{
    id: 33,
    name: "ComfortCrest Sofa",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3-rU_PwDcrUnpPM-_YRTmp2TcquUjXotwIAL0ZYQfPZh0UzRJxZnLHBx63is1e77xf4&usqp=CAU",
    price: "12500",
    category: "Furniture",
    details:  "A plush, multi-seater sofa designed for relaxation and social gatherings."
  },
  {
    id: 34,
    name: "LuxeLounge Recliner",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCOnWmFedPONE8NoFqYa4N4O5kFqMGd5Edg6oNe32HmuaNGuzbFE3KTD54piYYN2lttyg&usqp=CAU",
    price: "12000",
    category: "Furniture",
    details:  "A sleek recliner chair offering adjustable comfort and ergonomic support."
  },
  {
    id: 35,
    name: "Harmony Coffee Table",
    image:
      "https://fancyhouse-design.com/wp-content/uploads/2024/03/The-design-narrative-of-the-family-room-interior-blends-an-eclectic-mix-of-styles-for-a-unique-aesthetic.jpg",
    price: "13400",
    category: "Furniture",
    details:  "A stylish center table ideal for holding decor, drinks, and magazines."
  },
  {
    id: 36,
    name: "EvoShelf Unit",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/living-room-desig-ideas-655d38c1b117d.jpeg",
    price: "16400",
    category: "Furniture",
    details:  " A versatile shelving system for books, decor, or entertainment setups."
  },
  {
    id: 37,
    name: "CozyNest Armchair",
    image:
      "https://bpioutdoorliving.com/wp-content/uploads/2022/07/Outdoor-fireplace-min.jpg",
    price: "14500",
    category: "Furniture",
    details:  "A compact, cushioned chair perfect for personal comfort and lounging."
  },
  {
    id: 38,
    name: "Vista TV Console",
    image:
      "https://www.livingspaces.com/globalassets/images/inspiration/rooms/living/modern-living-room-with-japandi-sofa-loveseat-set_room.jpg?w=580&h=440&mode=pad",
    price: "13500",
    category: "Furniture",
    details:  " A modern media stand with ample storage for electronics and accessories."
  },
  {
    id: 39,
    name: "ZenOttoman",
    image:
      "https://www.livingspaces.com/globalassets/images/lp/2024/06/mariko/240604_mariko_image_concept_01_d.jpg",
    price: "15500",
    category: "Furniture",
    details:  "A soft, multi-purpose ottoman that doubles as a footrest or additional seating."
  },
  {
    id: 40,
    name: "Harmony Plush",
    image:
      "https://lindyegalloway.com/wp-content/uploads/2019/10/lVY2QrOh-1-600x400.jpg",
    price: "15000",
    category: "Furniture",
    details:  "A hybrid bed combining softness and support for all-night comfort."
  },
  {
    id: 41,
    name: "PrepEase Island",
    image:
      "https://baczewskiluxury.com/wp-content/uploads/2023/01/olive-wooden-kitchen-cabinets-768x432.jpg",
    price: "22200",
    category: "Furniture",
    details:  "A multifunctional kitchen island designed for food preparation and extra storage."
  },
  {
      id: 42,
      name: "PantryPro Cabinet",
      image:
        "https://static.wixstatic.com/media/29ebc0_d5c8bc6222d640c3a4ab199c7da516bc~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/29ebc0_d5c8bc6222d640c3a4ab199c7da516bc~mv2.jpg",
      price: "19500",
      category: "Furniture",
      details:  "A spacious storage unit for organizing kitchen essentials like spices and dry goods."
    },
    {
      id: 43,
      name: "Chef’sStation Cart",
      image:
        "https://images.woodenstreet.de/image/data/modular%20kitchen/Nexus.jpg",
      price: "215000",
      category: "Furniture",
      details:  "A portable kitchen cart with shelves and drawers for flexible cooking support."
    },
    {
      id: 44,
      name: "DineNook Set",
      image:
        "https://www.makwanaworld.com/images/l-shaped-modular-kitchen-design-luxurious-modern-wooden-white-cabinets.webp",
      price: "16500",
      category: "Furniture",
      details:  "A compact table and seating solution designed for cozy kitchen corners."
    },
    {
      id: 45,
      name: "StorageCove Rack",
      image:
        "https://www.makwanaworld.com/images/l-shaped-modular-kitchen-design-modern-sleek-functional-layout.webp",
      price: "16400",
      category: "Furniture",
      details:  "A versatile shelving rack for pots, pans, and frequently used kitchen items."
    },
    {
      id: 46,
      name: "BistroBar Table",
      image:
        "https://i.pinimg.com/564x/b9/bb/2d/b9bb2ddf261cd4d045d62c043de05e88.jpg",
      price: "19000",
      category: "Furniture",
      details:  "A high-top table perfect for quick meals or casual dining in small kitchens."
    },
    {
      id: 47,
      name: "UtilityStool Trio",
      image:
        "https://media.designcafe.com/wp-content/uploads/2023/01/02182321/trending-kitchen-cupboard-designs-with-crockery-bar-units.jpg",
      price: "19500",
      category: "Furniture",
      details:  "A set of durable, space-saving stools for extra kitchen seating."
    },
    {
      id: 48,
      name: "BakeMaster Cabinet",
      image:
        "https://ouchcart.com/cdn/shop/articles/00007.jpg?v=1687808567",
      price: "17500",
      category: "Furniture",
      details:  " A specialized cabinet designed for storing baking supplies and tools efficiently."
    },
    {
      id: 49,
      name: "CloudHaven Sofa",
      image:
        "https://cubicdesign.com.bd/wp-content/uploads/2024/03/stylish-pu-leather-waiting-sofa-with-metal-frame-for-reception-areas-jpg.webp",
      price: "14500",
      category: "Furniture",
      details:  "A plush, oversized sofa designed for ultimate comfort and relaxation."
    },
    {
        id: 50,
        name: "UrbanLuxe Sectional",
        image:
          "https://media.karousell.com/media/photos/products/2023/5/5/businesshotel_nordic_light_lux_1683317996_275834ba_thumbnail",
        price: "13500",
        category: "Furniture",
        details:  "A modular sectional sofa ideal for modern living spaces and large gatherings."
      },
      {
        id: 51,
        name: "VelvetCharm Loveseat",
        image:
          "https://sc04.alicdn.com/kf/Hd4e995830d044e708c4410fd3dd49ab09.jpg_350x350.jpg",
        price: "12500",
        category: "Furniture",
        details:  "A compact, stylish loveseat with a soft velvet finish for smaller spaces."
      },
      {
        id: 52,
        name: "ReclineEase Couch",
        image:
          "https://5.imimg.com/data5/ANDROID/Default/2023/10/356374112/YV/SJ/PD/120536763/product-jpeg-500x500.jpg",
        price: "16000",
        category: "Furniture",
        details:  "A reclining sofa with adjustable settings for personalized comfort."
      },
      {
        id: 53,
        name: "RusticRetreat Sofa",
        image:
          "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2023-06/sdc-371.jpg",
        price: "18000",
        category: "Furniture",
        details:  "A cozy, farmhouse-style sofa with a wooden frame and cushioned seating."
      },
      {
        id: 54,
        name: "ModernEdge Sleeper",
        image:
          "https://shop.gkwretail.com/cdn/shop/articles/Sofa_design.jpg?v=1673875085&width=1100",
        price: "19000",
        category: "Furniture",
        details:  "A convertible sofa bed perfect for small apartments or guest rooms."
      },
      {
        id: 55,
        name: "Serenity Curve Chaise",
        image:
          "https://media.licdn.com/dms/image/v2/D5612AQG3GjYEHlTZ1w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1699098582562?e=2147483647&v=beta&t=QmgQuVJCZsFBZvH-mofujlNrbK9EJoWIg0OAmV2JNqk",
        price: "13000",
        category: "Furniture",
        details:  "A curved, elegant chaise lounge sofa for both style and relaxation."
      },
      {
        id: 56,
        name: "BoldLine Mid-Century Sofa",
        image:
          "https://pictures-tanzania.jijistatic.com/1089489_NjIwLTYyMC02YzhjNGZjNDFk.webp",
        price: "17000",
        category: "Furniture",
        details:  " A sleek, minimalist sofa inspired by mid-century modern design."
      },
      {
        id: 57,
        name: "LuxeLounge Divan",
        image:
          "https://media.sofa.com/thumbor/unsafe/https%3A%2F%2Fmedia.sofa.com%2Fmedias%2Flarge-sofas.jpg%3Fcontext%3DbWFzdGVyfHJvb3R8MTUxNzQyNnxpbWFnZS9qcGVnfGhmMS9oMjcvODk2MzExOTY3NzQ3MC5qcGd8N2NmYTg3ZmJiNDg4NjZhZTU1NWY0YmIwMjFlNWZmYWEwNjUzNDkzNWNlZGU0YmMzNDk5NjBkNzM3ZGZlMDVkYw",
        price: "14500",
        category: "Furniture",
        details:  "A sophisticated sofa with an extended chaise lounge for ultimate relaxation."
      },
      {
        id: 58,
        name: "Harmony Sectional Divan",
        image:
          "https://hatil-image.s3.ap-southeast-1.amazonaws.com/Nop_Image/Houston-111.jpg",
        price: "13500",
        category: "Furniture",
        details:  "A modular sectional sofa with a built-in divan for extra seating or lounging."
      },
      {
        id: 59,
        name: "VelvetChic Divan Sofa",
        image:
          "https://www.godrejinterio.com/imagestore/B2C/56101502SD01586/56101502SD01586_A2_500x500.jpg",
        price: "12500",
        category: "Furniture",
        details:  "An elegant velvet-upholstered sofa featuring a plush divan extension."
      },
      {
          id: 60,
          name: "ReclineCorner Divan",
          image:
            "https://www.hi-tech.com.bd/wp-content/uploads/2024/03/IMG-20240320-WA0024.jpg",
          price: "13500",
          category: "Furniture",
          details:  "A corner sofa with a reclining backrest and an integrated divan for comfort."
        },
        {
          id: 61,
          name: "RusticLuxe Divan Sofa",
          image:
            "https://www.hi-tech.com.bd/wp-content/uploads/2024/03/01.jpg",
          price: "18000",
          category: "Furniture",
          details:  "A farmhouse-style sofa with a wooden frame and a cushioned divan attachment."
        },
        {
          id: 62,
          name: "ModernHaven Divan Set",
          image:
            "https://m.media-amazon.com/images/I/81AbuCPQfsL.jpg",
          price: "19000",
          category: "Furniture",
          details:  "A contemporary L-shaped sofa with a wide, flat divan for lounging or napping."
        },
        {
          id: 63,
          name: "CloudEase Divan Couch",
          image:
            "https://hivemodern.com/public_resources/blu-dot-hands-down-82-sofa-thumb.jpg",
          price: "13000",
          category: "Furniture",
          details:  "A soft and spacious sofa with a padded divan for cozy lounging."
        },
        {
          id: 64,
          name: "ChicCurve Divan Sofa",
          image:
            "https://deshigreetings.com/public/uploads/all/JUCzjUhV2qFFkgGo0Oyow54g0IavcAmQFOVTqE4K.jpg",
          price: "17000",
          category: "Furniture",
          details:  " A sleek, curved sofa with a gracefully attached divan for added seating style."
        },
        {
          id: 65,
          name: "FlexForm Table",
          image:
            "https://static.dezeen.com/uploads/2022/02/de-vorm-big-modular-table-system-design_dezeen_2364_col_2-1704x1136.jpg",
          price: "12500",
          category: "Furniture",
          details:  "A versatile modular table that can be reconfigured to fit various spaces and purposes."
        },
        {
          id: 66,
          name: "AdaptDesk Pro",
          image:
            "https://i.pinimg.com/736x/76/5a/04/765a040ac763176758a35713c06aa7ce.jpg",
          price: "16000",
          category: "Furniture",
          details:  "A height-adjustable table designed for work or study with modular add-ons."
        },
        {
          id: 67,
          name: "LinkNest Table",
          image:
            "https://www.mobilia.com.au/media/products/_productImage/mobilia_inclass_plania_table_3.jpg",
          price: "12500",
          category: "Furniture",
          details:  "A connecting table system that allows multiple units to be joined seamlessly."
        },
        {
            id: 68,
            name: "StackFlow Table",
            image:
              "https://zeitraumcdn-1db3c.kxcdn.com/wp-content/uploads/2020/02/zeitraummoebel-tischsystem-rail-massivholz-01.png",
            price: "16000",
            category: "Furniture",
            details:  "A stackable modular table perfect for compact storage and flexible use."
          },
          {
            id: 69,
            name: "QuadroMate",
            image:
              "https://designnation.com.au/assets/cache/images/-products/640x500-10710_5.639.jpg",
            price: "18000",
            category: "Furniture",
            details:  "A modular square table system ideal for creating custom layouts in shared spaces."
          },
          {
            id: 70,
            name: "PivotEdge Table",
            image:
              "https://www.atomicinteriors.co.uk/wp-content/uploads/2022/10/2_1185.jpg",
            price: "12500",
            category: "Furniture",
            details:  "A table with foldable extensions, offering extra surface area when needed."
          },
          {
              id: 71,
              name: "SnapFit Table",
              image:
                "https://media.designerpages.com/wp-content/uploads/2013/11/modular-tables_fractal_Nicholas-Karlovasitis_Sarah-GibsonLEAD.jpg",
              price: "13500",
              category: "Furniture",
              details:  "A modular table with interchangeable tops and legs for customizable designs."
            },
            {
              id: 72,
              name: "DuoFlex Table",
              image:
                "https://i.pinimg.com/736x/d2/0e/be/d20ebe467474fbb9861f4b55c3225a4c.jpg",
              price: "18000",
              category: "Furniture",
              details:  "A dual-purpose modular table that converts between dining and coffee table heights."
            },
            {
              id: 73,
              name: "AuraLounge Chair",
              image:
                "https://wendelbo.dk/wp-content/uploads/2019/12/Lobby_2-seater_Grain-col.-61256-Lobby_Chair_Grain-col.-61254-Glyph-table_72-dpi-1024x768.jpg",
              price: "14500",
              category: "Furniture",
              details:  " A stylish and comfortable chair designed for relaxation in modern lobbies."
            },
            {
              id: 74,
              name: "CurveComfort Seat",
              image:
                "https://static-01.daraz.com.bd/p/1141cfa85c65b95458fb42055b59de2f.jpg",
              price: "13500",
              category: "Furniture",
              details:  "An ergonomically curved chair that offers support and elegance for visitors."
            },
            {
              id: 75,
              name: "ZenLobby Lounger",
              image:
                "https://www.justdesignclassics.com/images/PerDesigner/Eames/14-lobby-chair.jpg",
              price: "12500",
              category: "Furniture",
              details:  "A minimalist lounge chair perfect for creating a calming and inviting atmosphere."
            },
            {
              id: 76,
              name: "MetroBench Seat",
              image:
                "https://www.rhubarbchairs.com/wp-content/uploads/2023/05/vitra-eames-es104-chocolate-brown-leather-lobby-chair-scaled.jpg",
              price: "16000",
              category: "Furniture",
              details:  " A compact bench-style chair ideal for accommodating multiple visitors in smaller lobbies.."
            },
            {
              id: 77,
              name: "PlushWave Recliner",
              image:
                "https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/4/16/Vitra_ES-104-Eames-Lobby-Chair-Buerostuhl_498x498-ID1925689-c7ff231819a773dd1c4f3dbec186fd24.jpg",
              price: "18000",
              category: "Furniture",
              details:  "A semi-reclining lobby chair that combines luxury with practicality."
            },
            {
              id: 78,
              name: "Vista Wingback Chair",
              image:
                "https://www.alpha.lk/wp-content/uploads/2020/11/loby-416x416.png",
              price: "19000",
              category: "Furniture",
              details:  "A high-back chair with an iconic winged design, offering both comfort and style."
            },
            {
                id: 79,
                name: "Unity Modular Chair",
                image:
                  "https://omegahomesolution.com.bd/wp-content/uploads/2024/08/Mascot-Lobby-Chair-2.png",
                price: "13000",
                category: "Furniture",
                details:  " A modular seating unit that can be arranged to fit various lobby layouts."
              },
              {
                id: 80,
                name: "OpalAccent Armchair",
                image:
                  "https://omegahomesolution.com.bd/wp-content/uploads/2024/10/Cuba-Lobby-Chair-1-300x300.png",
                price: "17000",
                category: "Furniture",
                details:  "A chic armchair that adds a pop of color and comfort to lobby spaces."
              },
];



function orderNow(productId) {
  const product = products.find((p) => p.id === productId);
  localStorage.setItem("productDetails", JSON.stringify(product));
  window.location.href = "productDetails.html"; 
}

