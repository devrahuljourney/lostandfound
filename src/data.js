export const lostAndFoundData = [
    {
      category : "mobile",
      item : [
        {
            id: "mobile1",
            type: "Lost",
            title: "Vivo y2",
            description: "I lost my phone near the park. It's a Vivo y2 with a cracked screen.",
            location: "Park",
            date: "2023-09-15",
            contactInfo: "johndoe@example.com",
            image: "https://media.wired.com/photos/609f0d31c4c56a005b6967b0/4:3/w_2131,h_1598,c_limit/Gear-lost-devices-1033159928.jpg"
          
        },
        {
            id: "mobile2",
            type: "Found",
            title: "Realme 6i",
            description: "I found a phone . It's a black Realme 6i with a cracked screen.",
            location: "In College Ground",
            date: "2013-09-05",
            contactInfo: "johndoe@example.com",
            image: "data:image/jpeg;base64,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"
        },
        {
            id: "mobile3",
            type: "Found",
            title: "Old micromax",
            description: "I found old micromax near faridabad . It's a black iPhone X with a cracked screen.",
            location: "Faridabad",
            date: "2023-09-15",
            contactInfo: "johndoe@example.com",
            image: "https://techbuzz.att.com/wp-content/uploads/2019/09/Lost-Phone-800x500.jpg"
        }
      ]
    },

    {
        category : "earphone",
        item : [
          {
              id: "earphone1",
              type: "Found",
              title: "Apple Earpod",
              description: "I found a Apple Earpod. It's a white......  .......",
              location: "ACEM",
              date: "2023-09-15",
              contactInfo: "johndoe@example.com",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4eaN0DZiN_JP8xGOopG8LICPlIyPo3ox8sQ&usqp=CAU"
          },
          {
              id: "earphone2",
              type: "Lost",
              title: "Boat Rocerz 255 neo",
              description: "I lost ........... ......... ............ ........ ................",
              location: "class",
              date: "2013-09-05",
              contactInfo: "johndoe@example.com",
              image: "https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Ftiimg.tistatic.com%2Ffp%2F1%2F007%2F874%2Fwater-resistant-red-neck-band-boat-rockerz-255-neo-wireless-earphone--039.jpg&w=750&q=75"
          },
          {
              id: "earphone3",
              type: "Found",
              title: "Boat earphone",
              description: "I lost my ............... ............. ......................",
              location: "Park",
              date: "2023-09-15",
              contactInfo: "johndoe@example.com",
              image: "https://cdn.dotpe.in/longtail/store-items/7937388/BQbn52cd.jpeg"
          }
        ]
      },
    
  ];
  