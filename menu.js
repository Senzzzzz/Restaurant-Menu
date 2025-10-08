const pageDisplay = document.querySelector(".page-container");
const navbar = document.querySelector(".navbar");

      const foodList = [
        {
          id: 1,
          name: "Chaliapin Steak Bowl",
          image: "https://imgix.ranker.com/user_node_img/50065/1001299257/original/steak-bowl-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650",
          price: 15.99,
          description: "Soma delivered this winning dish in his first shokugeki, defeating Meat Queen, Ikumi Mito. It's a juicy sirloin steak served over rice and topped with minced onions.",
          category: "favourite"
        },
        {
          id: 2,
          name: "Gotcha! Pork Roast",
          image: "https://imgix.ranker.com/user_node_img/50065/1001299242/original/gotcha-roast-pork-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650",
          price: 15.99,
          description: "The king of creation Soma presented this take on a pork roast, using potatoes, onions, and mushrooms to imitate meat after the meat products in his kitchen are sabotaged. He wrapped his mixture with bacon and herbs, then poured a red wine sauce over it to finish it off.",
          category: "favourite"
        },
        {
          id: 3,
          name: "A5 Japanese Beef Roti Bowl",
          image: "https://imgix.ranker.com/user_node_img/50065/1001299252/original/a5-beef-roti-bowl-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650",
          price: 15.99,
          description: "The 'Meat General' Ikumi Mito crafted this masterful rice dish in her shokugeki against Soma, using the highest grade of beef you can find in Japan. Sadly, Soma's Chaliapin managed to secure the win.",
          category: "favourite"
        },
        {
          id: 4,
          name: "Transforming Furikake Gohan",
          image: "https://ts1.cn.mm.bing.net/th/id/R-C.88d11f910d3aaf0b830fd37be7558da0?rik=MNUcxq%2fn%2f1cxXg&pid=ImgRaw&r=0",
          price: 15.99,
          description: "A secret menu item at the Yukihira restaurant, Soma's special take on eggs over rice consists of a jelly broth that crumbles and seeps deliciously into the steamy chicken and rice below. The jelly is made from a simmered sauce flavored by the chicken wings, soy sauce, ginger, and bonito.",
          category: "favourite"
        },
        {
          id: 5,
          name: "Eggs Benedict",
          image: "https://imgix.ranker.com/user_node_img/50065/1001299256/original/eggs-benedict-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650",
          price: 15.99,
          description: "With her 'Gods Tongue,' Erina made this eggs benedict for the Breakfast Buffet Challenge. In addition to her perfectly poached egg, golden sauce, and crispy bacon, Erina added karasumi (salted mullet roe) powder to make this dish extra special.",
          category: "favourite"
        },
        {
          id: 6,
          name: "Mini Souffle Omelet",
          image: "https://imgix.ranker.com/user_node_img/50065/1001299258/original/mini-souffle-omelet-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650",
          price: 15.99,
          description: "Soma's breakfast buffet challenger in the Friendship and Rapport Training Camp was this soft, fluffy omelette with a sweet tomato sauce to go with it.",
          category: "dessert"
        },
        {
          id: 7,
          name: "Quail Stuffed With Risotto And Eggs",
          image: "https://imgix.ranker.com/user_node_img/50065/1001299244/original/quail-stuffed-with-risotto-and-bacon-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650",
          price: 15.99,
          description: "Soma conjured this rich dish during his stagiaire stage with chef Kojiro Shinomiya. The quail is roasted, stuffed with creamy risotto, cabbage, and poached eggs.",
          category: "favourite"
        },
        {
          id: 8,
          name: "Special Smoked Curry",
          image: "https://imgix.ranker.com/user_node_img/50065/1001299265/original/smoked-curry-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650",
          price: 15.99,
          description: "'Prince of Smoke 'Shun Ibasaki brought his talent to his dish for the Autumn Election's preliminary round. He laid his smoked bacon, eggs, potatoes and more in a smoked curry, revealing this masterpiece of a meal.",
          category: "favourite"
        },
        {
          id: 9,
          name: "Dongpo Pork Curry Bowl",
          image: "https://tse3-mm.cn.bing.net/th/id/OIP-C.rCM-y3ShzdGYHfsgPtDmQwAAAA?rs=1&pid=ImgDetMain",
          price: 15.99,
          description: "Nothing less from 'Nikumi' Mito, her contribution to the Autumn Election's preliminary round was a rice bowl style dish with saucy spiced pork belly, served over hot white rice with bok choy and more.",
          category: "favourite"
        },
        {
          id: 10,
          name: "Jouichiro's Special Rich Ramen",
          image: "https://imgix.ranker.com/user_node_img/50065/1001299259/original/jouichiro-and-_39_s-special-rich-ramen-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650",
          price: 15.99,
          description: "Soma's charismatic father Jouichiro cooked this winning dish for a duel against his son. The vegetarian ramen is made with tempeh, vegetables, and soy milk, making for a creamy delightful breakfast.",
          category: "favourite"
        },
        {
          id: 11,
          name: "Lemon Curd Italiano Semifreddo",
          image: "https://ts2.cn.mm.bing.net/th?id=OIP.3YZvEmSMp8n0TRLf6Il9IgHaEK&w=298&h=167&c=10&rs=1&qlt=99&bgcl=fffffe&r=0&o=6&dpr=1.3&pid=MultiSMRSV2Source",
          price: 15.99,
          description: "Introducing the masterpiece from Takumi, the lemon flavored semifreddo from Italy. Unlike Subaru's Improved Three-Layer Semifreddo, it has a fourth layer of Lemon Curd. However, with a minimal amount of butter, he substituted it with olive oil to enhance the flavor of the lemons.",
          category: "dessert"
        },
        {
          id: 12,
          name: "Souffle Leger de Grace",
          image: "https://vignette.wikia.nocookie.net/shokugekinosoma/images/7/7b/Souffle_Leger_de_Grace_(anime).png/revision/latest?cb=20191208114940",
          price: 15.99,
          description: "By combining the fluffiness of a soufflé with the red bean paste centre of a dorayaki, she was able create magnificent that even made Momo admit it to be cute.",
          category: "dessert"
        },
        {
          id: 13,
          name: "Cream Float",
          image: "https://tse1-mm.cn.bing.net/th/id/OIP-C.g7SsMM7vAntg6t1g5ctR_gAAAA?rs=1&pid=ImgDetMain",
          price: 15.99,
          description: "Cute Cream Float that will wipe away the summer heat and give you the happiness needed to continue on!",
          category: "drinks"
        },
        {
          id: 14,
          name: "Matcha Green Tea",
          image: "https://ts1.cn.mm.bing.net/th/id/R-C.637e2420994e549fdbe0b4e671adc153?rik=QDDEO90Wa5q1aQ&riu=http%3a%2f%2fmedia.japanpowered.com%2fimages%2fpouring-green-tea.gif&ehk=Bau5wjw%2bvAQUaHwKyo7vSVokg0sdH1gkvQqT%2fsMfKmw%3d&risl=&pid=ImgRaw&r=0",
          price: 15.99,
          description: "A refreshing cup of Matcha Green Tea will soothe your troubles and cleanse your stomache",
          category: "drinks"
        },
        {
          id: 15,
          name: "Rainbow Terrine",
          image: "https://www.anime-evo.net/wp-content/uploads/2015/06/Shokugeki-no-Soma-12-01.jpg",
          price: 15.99,
          description: "Rainbow Terrine is a dish made by Megumi Tadokoro and Sōma Yukihira for their Shokugeki against Kojirō Shinomiya during the 92nd Tōtsuki Generation's Tōtsuki Friendship and Rapport Training Camp at the Tōtsuki Resort.",
          category: "specials"
        },
      ];
      
      window.addEventListener("DOMContentLoaded", () => {
        displayMenu(foodList)
        displayButtons();
      });

      const displayMenu = (menuItems) => {
        const displayHTML = menuItems.map(item => {
          return `
          <div class="dishes-container">
            <div class="menu-image-container">
              <img class="dish-image" src="${item.image}">
            </div>
            <div class="menu-details">
            <div class="items">
              <p class="dish-name">${item.name}</p>
              <p class="dish-price">$${item.price}</p>
            </div>
              <p class="dish-description">${item.description}</p>
            </div>
          </div>`
        }).join("");
        pageDisplay.innerHTML = displayHTML
      }

      const displayButtons = () => {
        const categories = foodList.reduce((value, item) => {
          if (!value.includes(item.category)) {
            value.push(item.category)
          } 
          return value
        }, ["main"]);
        const categoryBtns = categories.map((category) => {
          return `
          <button class="filter-btn" data-id="${category}">
            ${category}
            </button>`
        }).join("");
        navbar.innerHTML = categoryBtns
        
        const filterBtn = document.querySelectorAll(".filter-btn");

        filterBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const category = e.target.dataset.id;
          console.log(category)
          const menuCategory = foodList.filter((menuItems) => {
            if (menuItems.category === category) {
              return menuItems
            } 
          });
          if (category === "main") {
              displayMenu(foodList)
            } 
            else {
              displayMenu(menuCategory)
            }
        });
      });
      }