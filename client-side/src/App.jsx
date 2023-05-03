import { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import LoginFooter from "./components/LoginFooter/LoginFooter";
import httpClient from "./Services/httpclient";
import { FaSlidersH } from "react-icons/fa";
import { Context } from "./Provider/Context";

function App() {
  const [loading, setloading] = useState(false);
  const [loadingCatgory, setloadingCategory] = useState(true);
  const [categories, setcategories] = useState([]);
  const [clickedFilter, setclickedFilter] = useState("House");
  const [property, setProperty] = useState([]);
  const { setFilterShow } = useContext(Context);
  let isMounted = true;
  let isMountedCat = true;
  let catload = [];

  function showFilter() {
    setFilterShow(true);
  }
  const handleClickFilter = (category) => {
    setclickedFilter(category);
  };

  // fetchCategories
  useEffect(() => {
    const FetchCategories = async () => {
      try {
        setloadingCategory(true);
        const response = await httpClient.get(`/category/getallcategory`);
        setcategories(response.data.category);
        setloadingCategory(false);
      } catch (error) {
        setcategories([]);
        setloadingCategory(false);
        console.log(error.response.data.msg);
      }
    };

    if (isMountedCat) {
      FetchCategories();
    }
    return () => {
      isMountedCat = false;
    };
  }, []);

  for (let index = 0; index < 10; index++) {
    catload.push(index);
  }

  // fetchProperties
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setloading(true);
        const response = await httpClient.get(`property/getallproperty`);
        setProperty(response.data.prop);
        setloading(false);
      } catch (error) {
        setProperty([]);
        console.log(error.response.data.msg);
      }
    };

    if (isMounted) {
      fetchProperties();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div>
        <main className="main_nav">
          <Navbar />
          <nav className="navFilter">
            {loadingCatgory ? (
              <>
                <main>
                  {catload.map((_, index) => (
                    <div key={index}>
                      <p className="catload"></p>
                    </div>
                  ))}
                </main>
                <button onClick={showFilter}>
                  <FaSlidersH className="searchIcon2" /> filters
                </button>
              </>
            ) : (
              <>
                <main>
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      onClick={() => handleClickFilter(category)}
                      className={`${
                        category == clickedFilter ? "clickeddiv" : ""
                      }`}
                    >
                      <p>{category}</p>
                    </div>
                  ))}
                </main>
                <button onClick={showFilter}>
                  <FaSlidersH className="searchIcon2" /> filters
                </button>
              </>
            )}
          </nav>
        </main>

        <LoginFooter />
      </div>
      <div className="property">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto
        possimus laboriosam reiciendis voluptatum praesentium placeat eos nobis
        aut harum in itaque reiciendis, totam quo asperiores ea sint, animi
        debitis maiores, voluptatibus saepe repellendus quam! At fuga quidem
        dolores distinctio. Sunt sequi itaque perferendis? Libero, quis
        repellendus quo consequatur ex, iusto fuga corrupti id fugiat
        exercitationem alias suscipit earum molestias! Reprehenderit doloribus
        voluptas, esse ea libero, qui, aliquid obcaecati ab aut quas quo animi.
        Quas sint, est deleniti similique deserunt explicabo nam distinctio
        error quidem commodi at facilis fugiat veritatis excepturi et eos
        numquam corporis officia eius eaque ipsam accusamus minima ducimus
        beatae? Autem? Commodi laboriosam totam magni deleniti earum
        reprehenderit impedit veritatis esse nihil praesentium ad eum rem
        distinctio fugit optio facilis quod voluptate debitis quidem, ratione
        dolorem itaque eveniet error dolorum. Eius! Consequuntur, maiores amet.
        Cumque sequi ipsum ut ullam amet deserunt modi nihil quaerat nam
        voluptas eveniet accusantium expedita quasi pariatur in, minima sit
        libero cupiditate ipsam blanditiis! Consequuntur, officia repellat.
        Eveniet, tempora mollitia molestias laborum vitae nisi ex, qui dolor
        asperiores aliquam repellendus? Ratione suscipit unde ad incidunt natus
        mollitia fugiat repellat inventore praesentium minus, eaque eveniet
        beatae vero odit. Accusantium iure est itaque provident sunt commodi
        totam consequatur, quae ea sequi quibusdam exercitationem obcaecati
        saepe aliquid ad doloribus minima at incidunt consectetur ipsam ipsum
        rem! Iusto eum voluptatem temporibus! Provident animi tenetur non
        consequatur explicabo ducimus et rem cumque. Expedita, ullam quisquam
        quasi iusto distinctio voluptates doloremque repellendus dolorem quidem.
        Quo labore id itaque tempore quidem molestias eos rerum. Eaque culpa
        sed, dolorem ipsam provident, recusandae officia facere deleniti dolor
        hic dolorum, minima amet modi. Nisi recusandae voluptatibus cumque
        magnam deserunt atque nulla reiciendis. Facere, dolorum ipsam. Tenetur,
        veritatis! Ut a rem cum fugit sed doloribus laboriosam doloremque rerum
        dolorem? Laborum iusto quae quas magnam repellendus totam, facilis
        eligendi, vel labore incidunt at corrupti dolores et quis excepturi.
        Aliquid? Reiciendis quaerat eum dolorem fuga eveniet perferendis iure
        qui nulla nemo quis, dolorum sapiente voluptates debitis, asperiores
        alias magnam totam ratione atque est ad quidem praesentium non et?
        Earum, sapiente! Maiores repudiandae saepe sed soluta debitis
        architecto, minima sunt vitae ad deserunt obcaecati ab eveniet dicta,
        ullam libero voluptate suscipit reprehenderit ut sit illo sequi. Ipsam
        ipsa totam voluptas veniam? Consequatur natus cumque earum est quo
        quisquam vel eveniet hic inventore laborum, ipsum asperiores
        consequuntur modi quod ut labore incidunt illo doloremque. Eligendi,
        maxime? Vel a est rem, corrupti quae, aliquam dolor modi quos assumenda,
        aut quia voluptas pariatur fuga consequatur. Facilis fuga adipisci
        possimus cum aspernatur voluptas suscipit, sed eveniet iusto, esse
        corrupti? Maxime consequatur, fugiat aperiam aliquid similique neque
        facere, est possimus non alias dolor fugit. Perferendis saepe quidem,
        nobis ipsum ad similique et quos mollitia. Cum nesciunt commodi ab
        fugiat expedita. Incidunt modi expedita sapiente optio obcaecati, aut
        illo voluptatibus nihil labore laboriosam fugit, in rerum id suscipit
        perspiciatis. Corporis dolore culpa qui consequuntur modi inventore
        obcaecati veniam magnam nobis at. Sit id delectus, in ipsum tenetur
        officiis eligendi consequatur quis odio enim optio? Illum, blanditiis.
        Obcaecati sapiente blanditiis possimus, temporibus, quas quam commodi,
        pariatur ducimus fugiat magni perferendis voluptate dolore. Sequi,
        maiores at eum sed, rem quos blanditiis quasi excepturi sit, aspernatur
        cum. Explicabo voluptatum aliquam sunt blanditiis culpa provident
        deserunt sint. A facere soluta nemo officiis suscipit natus aliquid.
        Sint, expedita. Laboriosam suscipit quis aperiam autem animi nobis
        incidunt nesciunt, quisquam odio sed dolore ipsam omnis consectetur
        quibusdam, labore voluptatem illo rem dolorum voluptate accusamus eos
        fugit? Dicta, vero? Nihil quod eaque rem suscipit sapiente eius
        doloribus praesentium minus perferendis possimus atque ullam velit
        accusantium facilis maiores, quo in. Placeat, possimus. Adipisci officia
        pariatur laborum consectetur est reiciendis reprehenderit.
      </div>
    </>
  );
}

export default App;
