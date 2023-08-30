import react, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "../Components/AllCss/Home.css";


const Home = () => {
  const router = useNavigate();

  const {state,dispatch} = useContext(AuthContext);

  const logout = () => {
      dispatch({
          type: "Logout"
      })
      router("/login");
  }

  return (
    <>
      <div class="main">
        <div class="navbar">
          <div>
            <div class="logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tanishq_Logo.svg/1024px-Tanishq_Logo.svg.png"
                alt=""
              />
            </div>
            <div class="search">
              <div>
                <input
                  type="text"
                  placeholder="Search for Gold Jewellery, Diamond Jewellery and more.."
                />
              </div>
              <div>
                <i class="fa-solid fa-camera"></i>
              </div>
              <div>
                <i class="fa-solid fa-microphone"></i>
              </div>
              <div>
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div>
              <div class="stores">
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyOCAyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjggMjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE0NzkxMzg0Nzg0NTA1MDEwMjA1MDAwMDAwOTgxNjUwODMxODQwMjc0MjcxOV8pO30NCgkuc3Qxe29wYWNpdHk6MC40Njt9DQoJLnN0MntmaWxsOm5vbmU7fQ0KCS5zdDN7ZmlsbDpub25lO3N0cm9rZTojODMyNzI5O3N0cm9rZS1saW5lam9pbjpyb3VuZDt9DQo8L3N0eWxlPg0KPGc+DQoJPGRlZnM+DQoJCTxyZWN0IGlkPSJTVkdJRF8xXyIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4Ii8+DQoJPC9kZWZzPg0KCTxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwMjY4NDE4MTM5MjEwNjUyNzkyNzAwMDAwMTIxNjI5NzI0MzkxMDQ1MDMxNzFfIj4NCgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxnIGlkPSJTdG9yZV9JY29uX0RlZmF1bHRfU3RhdGVfMSIgc3R5bGU9ImNsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMDI2ODQxODEzOTIxMDY1Mjc5MjcwMDAwMDEyMTYyOTcyNDM5MTA0NTAzMTcxXyk7Ij4NCgkJPGcgaWQ9ImIiPg0KCQkJPGcgaWQ9ImMiPg0KCQkJCTxnIGlkPSJHcm91cF8xNDIwOSIgY2xhc3M9InN0MSI+DQoJCQkJCTxwYXRoIGlkPSJQYXRoXzEzNjkiIGNsYXNzPSJzdDIiIGQ9Ik0wLDB2MjhoMjhWMEgweiBNMjYuMiwyNi4ySDEuOFYxLjhoMjQuNVYyNi4yeiIvPg0KCQkJCTwvZz4NCgkJCTwvZz4NCgkJCTxnIGlkPSJkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjUwNCAzLjUwNCkiPg0KCQkJCTxnIGlkPSJlIj4NCgkJCQkJPGcgaWQ9Ikdyb3VwXzE0MjExIj4NCgkJCQkJCTxyZWN0IGlkPSJSZWN0YW5nbGVfOTkyNCIgeD0iOC43IiB5PSI4LjciIGNsYXNzPSJzdDMiIHdpZHRoPSIxMS4xIiBoZWlnaHQ9IjExLjkiLz4NCgkJCQkJCTxwYXRoIGlkPSJQYXRoXzEzNzAiIGNsYXNzPSJzdDMiIGQ9Ik0yMSw0LjN2NC4zSDBWNC4zTDMuNSwwaDE0TDIxLDQuM3oiLz4NCgkJCQkJCTxsaW5lIGlkPSJMaW5lXzgzIiBjbGFzcz0ic3QzIiB4MT0iNC45IiB5MT0iOC40IiB4Mj0iNC45IiB5Mj0iNC41Ii8+DQoJCQkJCQk8bGluZSBpZD0iTGluZV84NCIgY2xhc3M9InN0MyIgeDE9IjEwLjUiIHkxPSI4LjQiIHgyPSIxMC41IiB5Mj0iNC41Ii8+DQoJCQkJCQk8bGluZSBpZD0iTGluZV84NSIgY2xhc3M9InN0MyIgeDE9IjE2LjEiIHkxPSI4LjQiIHgyPSIxNi4xIiB5Mj0iNC41Ii8+DQoJCQkJCQk8bGluZSBpZD0iTGluZV84NiIgY2xhc3M9InN0MyIgeDE9IjEuMiIgeTE9IjguNCIgeDI9IjEuMiIgeTI9IjIxIi8+DQoJCQkJCTwvZz4NCgkJCQk8L2c+DQoJCQk8L2c+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=="
                  alt=""
                />
                <p>STORES</p>
              </div>
              <div class="stores">
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PGRlZnM+PHN0eWxlPi5ie2ZpbGw6IzgzMjcyOTt9LmN7ZmlsbDpub25lO3N0cm9rZTojZWZlM2UzO3N0cm9rZS13aWR0aDoxLjRweDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xMywxNS43NWMtMy42NywwLTExLDEuODQtMTEsNS41djIuNzVIMjR2LTIuNzVjMC0zLjY2LTcuMzMtNS41LTExLTUuNVptMC0xMy43NWMtMy4wNCwwLTUuNSwyLjQ2LTUuNSw1LjVzMi40Niw1LjUsNS41LDUuNSw1LjUtMi40Niw1LjUtNS41LTIuNDYtNS41LTUuNS01LjVabTAsMTYuNWMzLjcxLDAsNy45NywxLjc3LDguMjUsMi43NUg0Ljc1Yy4zMi0uOTksNC41NS0yLjc1LDguMjUtMi43NW0wLTEzLjc1YzEuNTEsMCwyLjc1LDEuMjQsMi43NSwyLjc1cy0xLjI0LDIuNzUtMi43NSwyLjc1LTIuNzUtMS4yNC0yLjc1LTIuNzUsMS4yNC0yLjc1LDIuNzUtMi43NSIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNMTMsMTUuNzVjLTMuNjcsMC0xMSwxLjg0LTExLDUuNXYyLjc1SDI0di0yLjc1YzAtMy42Ni03LjMzLTUuNS0xMS01LjVabTAtMTMuNzVjLTMuMDQsMC01LjUsMi40Ni01LjUsNS41czIuNDYsNS41LDUuNSw1LjUsNS41LTIuNDYsNS41LTUuNS0yLjQ2LTUuNS01LjUtNS41Wm0wLDE2LjVjMy43MSwwLDcuOTcsMS43Nyw4LjI1LDIuNzVINC43NWMuMzItLjk5LDQuNTUtMi43NSw4LjI1LTIuNzVtMC0xMy43NWMxLjUxLDAsMi43NSwxLjI0LDIuNzUsMi43NXMtMS4yNCwyLjc1LTIuNzUsMi43NS0yLjc1LTEuMjQtMi43NS0yLjc1LDEuMjQtMi43NSwyLjc1LTIuNzUiLz48L3N2Zz4="
                  alt=""
                />
                <p id="switchUser">{state?.user?.name}</p>
              </div>
              <div class="stores">
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNiAyNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjYgMjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojODMyNzI5O30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojRUZFM0UzO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTMuMSwyMC41TDEzLDIwLjZsLTAuMS0wLjFDNy4xLDE1LjQsMy4zLDEyLDMuMyw4LjZjMC0yLjQsMS44LTQuMSw0LjMtNC4xYzEuOSwwLDMuNywxLjIsNC40LDIuOGgyLjMKCQljMC42LTEuNiwyLjUtMi44LDQuMy0yLjhjMi40LDAsNC4zLDEuOCw0LjMsNC4xQzIyLjgsMTIuMSwxOC45LDE1LjQsMTMuMSwyMC41eiBNMTguNSwyLjJjLTIuMSwwLTQuMiwxLTUuNSwyLjUKCQljLTEuMy0xLjUtMy40LTIuNS01LjUtMi41QzMuNywyLjIsMC44LDUsMC44LDguN2MwLDQuNSw0LjEsOC4xLDEwLjQsMTMuNmwxLjgsMS41bDEuOC0xLjZjNi4zLTUuNSwxMC40LTkuMiwxMC40LTEzLjYKCQlDMjUuMiw1LDIyLjIsMi4yLDE4LjUsMi4yeiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEzLjEsMjAuNUwxMywyMC42bC0wLjEtMC4xQzcuMSwxNS40LDMuMywxMiwzLjMsOC42YzAtMi40LDEuOC00LjEsNC4zLTQuMWMxLjksMCwzLjcsMS4yLDQuNCwyLjhoMi4zCgkJYzAuNi0xLjYsMi41LTIuOCw0LjMtMi44YzIuNCwwLDQuMywxLjgsNC4zLDQuMUMyMi44LDEyLjEsMTguOSwxNS40LDEzLjEsMjAuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xOC41LDIuMmMtMi4xLDAtNC4yLDEtNS41LDIuNWMtMS4zLTEuNS0zLjQtMi41LTUuNS0yLjVDMy43LDIuMiwwLjgsNSwwLjgsOC43YzAsNC41LDQuMSw4LjEsMTAuNCwxMy42CgkJbDEuOCwxLjVsMS44LTEuNmM2LjMtNS41LDEwLjQtOS4yLDEwLjQtMTMuNkMyNS4yLDUsMjIuMiwyLjIsMTguNSwyLjJ6Ii8+CjwvZz4KPC9zdmc+Cg=="
                  alt=""
                />
                <p>WISHLIST</p>
              </div>
              <div class="stores">
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PGRlZnM+PHN0eWxlPi5ie2ZpbGw6IzgzMjcyOTt9LmN7ZmlsbDpub25lO3N0cm9rZTojZWZlM2UzO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iYiIgZD0iTTIwLjAyLDIwLjAyYy0xLjI5LDAtMi4zMywxLjA1LTIuMzMsMi4zNHMxLjA0LDIuMzQsMi4zMywyLjM0LDIuMzQtMS4wNSwyLjM0LTIuMzQtMS4wNS0yLjM0LTIuMzQtMi4zNFptLTExLjcsMGMtMS4yOSwwLTIuMzMsMS4wNS0yLjMzLDIuMzRzMS4wNCwyLjM0LDIuMzMsMi4zNCwyLjM0LTEuMDUsMi4zNC0yLjM0LTEuMDUtMi4zNC0yLjM0LTIuMzRabS0uOTgtMTQuMDRoMTQuMjJsLTMuMjMsNS44NUgxMC4xbC0yLjc3LTUuODVabTEwLjk5LDguMTljLjg4LDAsMS42NS0uNDgsMi4wNS0xLjIxbDQuMTktNy41OWMuNDMtLjc3LS4xMy0xLjczLTEuMDItMS43M0g2LjIybC0xLjEtMi4zNEgxLjI5VjMuNjRIMy42M0w3Ljg1LDEyLjUybC0xLjU4LDIuODZjLS44NSwxLjU3LC4yNywzLjQ3LDIuMDUsMy40N2gxNC4wNHYtMi4zNEg4LjMxbDEuMjktMi4zNGg4LjcyWiIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNMjAuMDIsMjAuMDJjLTEuMjksMC0yLjMzLDEuMDUtMi4zMywyLjM0czEuMDQsMi4zNCwyLjMzLDIuMzQsMi4zNC0xLjA1LDIuMzQtMi4zNC0xLjA1LTIuMzQtMi4zNC0yLjM0Wm0tMTEuNywwYy0xLjI5LDAtMi4zMywxLjA1LTIuMzMsMi4zNHMxLjA0LDIuMzQsMi4zMywyLjM0LDIuMzQtMS4wNSwyLjM0LTIuMzQtMS4wNS0yLjM0LTIuMzQtMi4zNFptLS45OC0xNC4wNGgxNC4yMmwtMy4yMyw1Ljg1SDEwLjFsLTIuNzctNS44NVptMTAuOTksOC4xOWMuODgsMCwxLjY1LS40OCwyLjA1LTEuMjFsNC4xOS03LjU5Yy40My0uNzctLjEzLTEuNzMtMS4wMi0xLjczSDYuMjJsLTEuMS0yLjM0SDEuMjlWMy42NEgzLjYzTDcuODUsMTIuNTJsLTEuNTgsMi44NmMtLjg1LDEuNTcsLjI3LDMuNDcsMi4wNSwzLjQ3aDE0LjA0di0yLjM0SDguMzFsMS4yOS0yLjM0aDguNzJaIi8+PC9zdmc+"
                  alt=""
                />
                <p>CART</p>
              </div>
              <div id="logout">
                <button onClick={logout}>
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="title">
          <div class="titleList">
            <p>ALL JEWELLERY</p>
          </div>
          <div class="titleList">
            <p>
              <a href="./Mens_Jewel.html">GOLD</a>{" "}
            </p>
          </div>
          <div class="titleList">
            <p>DIAMOND</p>
          </div>
          <div class="titleList">
            <p>EARRINGS</p>
          </div>
          <div class="titleList">
            <p>RINGS</p>
          </div>
          <div class="titleList">
            <p>MIA</p>
          </div>
          <div class="titleList">
            <p>COLLECTIONS</p>
          </div>
          <div class="titleList">
            <p>RIVAAH</p>
          </div>
          <div class="titleList">
            <p>GOLDEN HARVEST</p>
          </div>
          <div class="titleList">
            <p>CORPORATE GIFTING</p>
          </div>
          <div class="titleList">
            <p>MORE</p>
          </div>
        </div>
        <div class="slide">
          <img
            src="https://www.tanishq.co.in/wps/wcm/connect/tanishqrt/17841f2c-71d7-42dd-b88a-12570af252a6/desktop/pip-mobilenew.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0T6206GQH590V3000-17841f2c-71d7-42dd-b88a-12570af252a6-desktop-oqlTASL&amp;impolicy=pqmed"
            alt=""
          />
        </div>
        {/* <!-- **********Category******** --> */}
        <div class="heading">
          <h1>Shop Jewellery By Category</h1>
          <p>Browse through your favourite categories. We've got them all!</p>
        </div>
        <div class="category">
          <div class="categoryList">
            <div class="categoryImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/GoldCoin.webp"
                alt=""
              />
            </div>
            <div class="categoryTitle">
              <h4>Gold Coins</h4>
              <p>
                Explore <i class="fa-solid fa-angle-right"></i>
              </p>
            </div>
          </div>
          <div class="categoryList">
            <div class="categoryImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/earrings-new.webp"
                alt=""
              />
            </div>
            <div class="categoryTitle">
              <h4>Earrings</h4>
              <p>
                Explore <i class="fa-solid fa-angle-right"></i>
              </p>
            </div>
          </div>
          <div class="categoryList">
            <div class="categoryImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/Pendant.webp"
                alt=""
              />
            </div>
            <div class="categoryTitle">
              <h4>Pendants</h4>
              <p>
                Explore <i class="fa-solid fa-angle-right"></i>
              </p>
            </div>
          </div>
          <div class="categoryList">
            <div class="categoryImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/Ring.webp"
                alt=""
              />
            </div>
            <div class="categoryTitle">
              <h4>Finger Rings</h4>
              <p>
                Explore <i class="fa-solid fa-angle-right"></i>
              </p>
            </div>
          </div>
          <div class="categoryList">
            <div class="categoryImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/mangalsutras-new.webp"
                alt=""
              />
            </div>
            <div class="categoryTitle">
              <h4>Mangalsutra</h4>
              <p>
                Explore <i class="fa-solid fa-angle-right"></i>
              </p>
            </div>
          </div>
          <div class="categoryList">
            <div class="categoryImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/Neckwear.webp"
                alt=""
              />
            </div>
            <div class="categoryTitle">
              <h4>Neck Wear</h4>
              <p>
                Explore <i class="fa-solid fa-angle-right"></i>
              </p>
            </div>
          </div>
          <div class="categoryList">
            <div class="categoryImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/CoupleRing.webp"
                alt=""
              />
            </div>
            <div class="categoryTitle">
              <h4>Engagement Rings</h4>
              <p>
                Explore <i class="fa-solid fa-angle-right"></i>
              </p>
            </div>
          </div>
          <div class="categoryList">
            <div class="categoryImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/Chain.webp"
                alt=""
              />
            </div>
            <div class="categoryTitle">
              <h4>Chains</h4>
              <p>
                Explore <i class="fa-solid fa-angle-right"></i>
              </p>
            </div>
          </div>
          <div class="categoryList">
            <div class="categoryImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/Bangle.webp"
                alt=""
              />
            </div>
            <div class="categoryTitle">
              <h4>Bangles</h4>
              <p>
                Explore <i class="fa-solid fa-angle-right"></i>
              </p>
            </div>
          </div>
          <div class="categoryList">
            <div class="categoryImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/bracelets-new.webp"
                alt=""
              />
            </div>
            <div class="categoryTitle">
              <h4>Bracelets</h4>
              <p>
                Explore <i class="fa-solid fa-angle-right"></i>
              </p>
            </div>
          </div>
          <div class="categoryList">
            <div class="categoryImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/nosepins-new.webp"
                alt=""
              />
            </div>
            <div class="categoryTitle">
              <h4>Nose Pins</h4>
              <p>
                Explore <i class="fa-solid fa-angle-right"></i>
              </p>
            </div>
          </div>
          <div class="categoryList">
            <div class="categoryImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/pendant-set-new.webp"
                alt=""
              />
            </div>
            <div class="categoryTitle">
              <h4>Pendant Sets</h4>
              <p>
                Explore <i class="fa-solid fa-angle-right"></i>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- ******Collection******* --> */}
        <div class="heading">
          <h1>Shop By Collection</h1>
          <p>
            Whatever the occasion, we've got a beautiful piece of jewellery for
            you.
          </p>
        </div>
        <div class="collection">
          <div class="collectionList">
            <div class="collectionImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCollection/dor-new.jpg"
                alt=""
              />
            </div>
            <div class="collectionDesc">
              <div class="left">
                <p>Dor</p>
              </div>
              <div class="right">
                <div class="right1">
                  <p>Explore</p>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="collectionList">
            <div class="collectionImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCollection/gold-coins.jpg"
                alt="gold image"
              />
            </div>
            <div class="collectionDesc">
              <div class="left">
                <p>Exclusive Coins</p>
              </div>
              <div class="right">
                <div class="right1">
                  <p>Explore</p>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="collectionList">
            <div class="collectionImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCollection/dor-new.jpg"
                alt="gold image"
              />
            </div>
            <div class="collectionDesc">
              <div class="left">
                <p>Stunnin Every Ear</p>
              </div>
              <div class="right">
                <div class="right1">
                  <p>Explore</p>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="gift">
          <div class="giftImage">
            <img
              src="https://www.tanishq.co.in/wps/wcm/connect/tanishqrt/c6d65b68-9a34-434a-96bf-4799e498f5b8/desktop/giftingbannernew.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0T6206GQH590V3000-c6d65b68-9a34-434a-96bf-4799e498f5b8-desktop-ogpCZuR"
              alt=""
            />
          </div>
          <div class="giftButton">
            <button>Explore Now</button>
          </div>
        </div>
        {/* <!-- **********Top Seller********* --> */}
        <div class="heading">
          <h1>Top Sellers</h1>
          <p>Check out the products that our customers love the most</p>
        </div>
        <div class="topSeller">
          <div class="sellerList">
            <div class="sellerImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Catalog/510956CANCA00_1.jpg?impolicy=pqmed&imwidth=320"
                alt=""
              />
            </div>
            <div class="sellerListCost">
              <p>Sleek Gold Foxtail Chain</p>
              <strong>₹ 29641</strong>
              <button>Explore</button>
            </div>
          </div>
          <div class="sellerList">
            <div class="sellerImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Catalog/510433SEAAGA00_1.jpg?impolicy=pqmed&imwidth=320"
                alt=""
              />
            </div>
            <div class="sellerListCost">
              <p>Romantic Heart Pattern Stud Earrings</p>
              <strong>₹ 9092</strong>
              <button>Explore</button>
            </div>
          </div>
          <div class="sellerList">
            <div class="sellerImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Catalog/512714PRIAAA00_1.jpg?impolicy=pqmed&imwidth=320"
                alt=""
              />
            </div>
            <div class="sellerListCost">
              <p>Surreal Modern Abstract Floral Gold Pendant</p>
              <strong>₹ 5848</strong>
              <button>Explore</button>
            </div>
          </div>
          <div class="sellerList">
            <div class="sellerImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Catalog/511016COAAA00_1.jpg?impolicy=pqmed&imwidth=320"
                alt=""
              />
            </div>
            <div class="sellerListCost">
              <p>Sleek Gold Kamal Chain</p>
              <strong>₹ 20797</strong>
              <button>Explore</button>
            </div>
          </div>
        </div>

        {/* <!-- ********New For You********* --> */}
        <div class="heading">
          <h1>New For You!</h1>
          <p>Our Latest Releases, Just For you!</p>
        </div>
        <div class="new4U">
          <div class="new4UList">
            <div class="new4UImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/newForYou/sparkling-avenues.jpg"
                alt=""
              />
            </div>
            <div class="new4Uxplore">
              <button>Explore More</button>
            </div>
          </div>

          <div class="new4UList">
            <div class="new4UImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/newForYou/pretty-in-pink.jpg"
                alt=""
              />
            </div>
            <div class="new4Uxplore">
              <button>Explore More</button>
            </div>
          </div>

          <div class="new4UList">
            <div class="new4UImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/newForYou/dotsanddashes.jpg"
                alt=""
              />
            </div>
            <div class="new4Uxplore">
              <button>Explore More</button>
            </div>
          </div>
        </div>

        <div class="heading">
          <h1>Shop by Gender</h1>
          <p>Expolre our latest designs curated just for you.</p>
        </div>
        <div class="collection">
          <div class="collectionList">
            <div class="collectionImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByGender/Woman.jpg"
                alt=""
              />
            </div>
            <div class="collectionDesc">
              <div class="left">
                <p>Women</p>
              </div>
              <div class="right">
                <div class="right1">
                  <p>Explore More</p>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="collectionList">
            <div class="collectionImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByGender/Men.jpg"
                alt="gold image"
              />
            </div>
            <div class="collectionDesc">
              <div class="left">
                <p> Men</p>
              </div>
              <div class="right">
                <div class="right1">
                  <p>Explore More</p>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="collectionList">
            <div class="collectionImage">
              <img
                src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByGender/kid.jpg"
                alt="gold image"
              />
            </div>
            <div class="collectionDesc">
              <div class="left">
                <p>Kids</p>
              </div>
              <div class="right">
                <div class="right1">
                  <p>Explore More</p>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gift">
          <div class="giftImage">
            <img
              src="https://www.tanishq.co.in/wps/wcm/connect/tanishqrt/a94e7dbe-ef00-4523-b3c7-5d9ad861ccbf/desktop/naturefinest-desktop.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0T6206GQH590V3000-a94e7dbe-ef00-4523-b3c7-5d9ad861ccbf-desktop-otFZisl"
              alt=""
            />
          </div>
          <div class="giftButton">
            <button>Explore Now</button>
          </div>
        </div>

        <div class="gift">
          <div class="giftImage">
            <video autoplay muted loop>
              <source
                src="https://staticimg.titan.co.in/Tanishq/Banners/video/ge-mb.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div class="giftButton">
            <button>Explore Now</button>
          </div>
        </div>
        {/* <!-- *************Connect with us********* --> */}
        <div class="heading">
          <h1>Connect with Us</h1>
          <p>We are always available to guide you at your convenience.</p>
        </div>
        <div class="connect">
          <div class="connections">
            <div class="connectDetail">
              <p>Connect On</p>
              <h1>whatsapp</h1>
            </div>
            <div class="connectTo">
              <div class="connectTo-inner">
                <p>Connect</p>
              </div>
              <div class="connectLogo">
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div class="connections">
            <div class="connectDetail">
              <p>Book an</p>
              <h1>Appointment</h1>
            </div>
            <div class="connectTo">
              <div class="connectTo-inner">
                <p>Book</p>
              </div>
              <div class="connectLogo">
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div class="connections">
            <div class="connectDetail">
              <p>Schedule a</p>
              <h1>Video Call</h1>
            </div>
            <div class="connectTo">
              <div class="connectTo-inner">
                <p>Schedule</p>
              </div>
              <div class="connectLogo">
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ********Footer******* --> */}
        <div class="footer">
          <div class="inner-footer">
            <div class="topic">
              <h3>Useful Links</h3>
              <p>Delivery Information</p>
              <p>International Shipping</p>
              <p>Payment Options</p>
              <p>Track Your Order</p>
              <p>Returns</p>
              <p>Find a Store</p>
            </div>
            <div class="topic">
              <h3>Information</h3>
              <p>Careers</p>
              <p>Blog</p>
              <p>Offers and Contest Details</p>
              <p>Help & FAQS</p>
              <p>About Tanishq</p>
            </div>
            <div class="topic">
              <h3>Contact Us</h3>
              <p>Write to Us</p>
              <p>1800-266-0123</p>
              <p>Chat with Us</p>
            </div>
            <div class="topic">
              <h4>Download the Tanishq App now</h4>
              <div class="app-logo">
                <img
                  src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/apple.svg"
                  alt=""
                />
                <img
                  src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/google-play.svg"
                  alt=""
                />
              </div>
              <h4>Follow us On</h4>
              <div class="social-logo">
                <i class="fa-brands fa-facebook-f fa-2x"></i>
                <i class="fa-brands fa-twitter fa-2x"></i>
                <i class="fa-brands fa-instagram fa-2x"></i>
              </div>
            </div>
          </div>

          <div class="bottom-footer">
            <div class="inner-bottom-footer">
              <div class="finance">
                <div class="finance-logo">
                  <img
                    src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/visa.svg"
                    alt=""
                  />
                </div>
                <div class="finance-logo">
                  <img
                    src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/master.svg"
                    alt=""
                  />
                </div>
                <div class="finance-logo">
                  <img
                    src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/paypal.svg"
                    alt=""
                  />
                </div>
                <div class="finance-logo">
                  <img
                    src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/maestro.svg"
                    alt=""
                  />
                </div>
                <div class="finance-logo">
                  <img
                    src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/rupay.svg"
                    alt=""
                  />
                </div>
                <div class="finance-logo">
                  <img
                    src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/axis.svg"
                    alt=""
                  />
                </div>
                <div class="finance-logo">
                  <img
                    src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/icici.svg"
                    alt=""
                  />
                </div>
                <div class="finance-logo">
                  <img
                    src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/diners.svg"
                    alt=""
                  />
                </div>
                <div class="finance-logo">
                  <img
                    src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/amex.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="copyright">
                <div class="policy">
                  <p>2023 Titan Company Limited. All Rights Reserved.</p>
                  <p>Terms and Conditions | Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
