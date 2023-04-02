import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Navbar/Navbar.css";

function FilterProperties(props) {
  const [fullscreen, setFullscreen] = useState(true);
  // const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <div id="modalDisplay">
        <Modal {...props} className="modalStyle">
          <Modal.Header closeButton className="p-1 pe-3">
            <Modal.Title className="text-center ms-auto">Filters</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="topModal">
              <p className="fw-bold">price change</p>
              <p className="fw-lighter">The average nightly price is $472</p>
            </div>
            <div>
              <img
                src="https://journals.sagepub.com/cms/10.1177/2041669520987254/asset/images/large/10.1177_2041669520987254-fig9.jpeg"
                alt=""
                className="imgGraph"
              />
            </div>
            <div className="text-center mt-2">
              <input
                type="text"
                className=" p-2 inputPrice"
                placeholder="min"
              />
              <span className="ms-2 me-2">-</span>
              <input type="text" className="inputPrice p-2" placeholder="max" />
            </div>
            cumque. Repudiandae iure unde illum ea consequatur error modi
            adipisci amet, minus aspernatur sed odit nisi facilis eligendi culpa
            quo quod esse temporibus officiis nam. Fugit ad enim sint nisi iste
            odit minima magnam eveniet fugiat? Numquam, non iusto.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default FilterProperties;

// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import React, { useState } from "react";
// import "./Navbar/Navbar.css";

// function FilterProperties(props) {
//    const values = [
//      true,
//      "sm-down",
//      "md-down",
//      "lg-down",
//      "xl-down",
//      "xxl-down",
//    ];
//   return (
//     <Modal
//       {...props}
//       size="xl"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       className="modalStyle"
//     >
//       <Modal.Header closeButton className="bg-success">
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="">
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet
//           consectetur adipisicing elit. Maxime laborum repellendus qui facere
//           est dignissimos quibusdam assumenda sequi mollitia veritatis dolor
//           porro excepturi doloribus repellat ex sit animi exercitationem
//           incidunt esse minus vel, eligendi quidem! Minima nemo iusto cum at
//           libero tempora doloremque dignissimos atque nihil, illum, voluptate
//           assumenda adipisci, aliquam deleniti quam dicta voluptatibus. Nisi
//           sapiente nulla iure possimus optio? Quod esse debitis porro sunt eos
//           quasi rerum aliquid corporis maxime autem quas est harum animi
//           laudantium accusamus iusto a ullam, molestias doloremque quia. Vel
//           laborum quos dolore alias explicabo excepturi quo, fugit dolor
//           quibusdam aliquam consectetur, nemo nam perspiciatis omnis,
//           exercitationem necessitatibus dolorem labore corporis. Distinctio qui
//           numquam error sapiente natus. Ea ullam sint fuga expedita consequatur
//           minima error tempore mollitia? Quidem delectus ratione ducimus eos
//           laborum aliquid veritatis eaque beatae consequatur, cupiditate
//           nesciunt, vel enim laboriosam fuga sint sed hic rem. Ex assumenda
//           minus ipsa facere, fugiat blanditiis exercitationem commodi alias
//           praesentium, distinctio fuga impedit mollitia non sit accusamus modi
//           ut, soluta voluptatibus quisquam sed? Animi voluptatem recusandae
//           explicabo corporis iure architecto iste tempora iusto totam. Sit
//           provident numquam velit suscipit ducimus quo nihil nostrum est.
//           Reprehenderit dolor eaque fuga vitae modi iste quasi quod soluta
//           deserunt! Corporis omnis quibusdam sit voluptatum porro debitis,
//           dolorum voluptatibus. Harum, illo corporis a pariatur quam perferendis
//           suscipit dolorem? Natus laborum deserunt quidem recusandae ex, tempore
//           sapiente distinctio consequatur rerum fuga officiis aut vero velit,
//           eos autem provident delectus nam labore? Numquam, perferendis
//           distinctio! Ratione placeat expedita aliquam, magni itaque ipsum eius,
//           consectetur distinctio modi repellendus perferendis tenetur ex
//           mollitia amet sunt dicta enim praesentium quo cupiditate at
//           accusantium eaque! Quo voluptate animi maxime cupiditate culpa
//           laudantium quia aperiam. Culpa, autem! Excepturi autem inventore
//           explicabo, doloremque esse repellat in aut nam error corporis
//           doloribus mollitia deserunt rem numquam hic nesciunt assumenda
//           repellendus. Ducimus quidem, assumenda, quam enim delectus labore quos
//           ab illo voluptate placeat dolorum iusto natus accusantium tempore ea
//           itaque. Perferendis, repudiandae! Atque distinctio nemo animi illum,
//           amet repellendus blanditiis, quo alias corrupti officiis
//           reprehenderit, incidunt consectetur aut hic inventore aperiam.
//           Consequuntur porro ducimus nisi aspernatur cumque doloremque nostrum
//           neque unde voluptatum! Dolorum, perspiciatis inventore! Praesentium
//           magni enim eligendi, culpa itaque minus, obcaecati cumque tempora
//           voluptatibus unde dolores perferendis dolorum? Minus facilis quaerat
//           vel, quisquam neque nobis consequuntur, explicabo totam repudiandae
//           saepe maxime ducimus distinctio sed tenetur in eos architecto sit.
//           Ipsum quos maxime ab reiciendis voluptas cum fuga corporis voluptatem
//           recusandae at? At temporibus ut sint quibusdam rem aspernatur. Dolor
//           eius velit ratione minus quidem dicta possimus tenetur? Sint ipsa,
//           architecto tempore, ipsam mollitia dolore autem reprehenderit itaque
//           nemo laboriosam nihil sequi officia nisi explicabo maxime id commodi!
//           Officiis totam error quasi cumque libero! Deleniti quas ea ipsa
//           nesciunt sit adipisci, laudantium explicabo voluptas fugiat a magni
//           libero. Nostrum aut esse laudantium repudiandae quasi minima fuga,
//           repellendus est exercitationem ipsa, assumenda vero sit nesciunt,
//           earum unde sint enim a ea nulla recusandae ab atque. Possimus debitis
//           laboriosam esse, praesentium quae est tempora facilis quibusdam illo
//           sint aperiam sed minima recusandae similique ratione eaque ex, facere
//           repudiandae animi magnam perspiciatis non consequuntur labore.
//           Voluptatibus perspiciatis cum velit corporis officia tempora nostrum,
//           a accusantium sint deserunt nesciunt, doloribus non dolore, natus illo
//           ullam sit architecto animi expedita? Blanditiis tempora et aliquid,
//           alias nihil nulla dolorem nemo, nam aliquam incidunt molestias
//           deleniti nesciunt ipsam excepturi sint quis? Harum corrupti earum modi
//           et sed laborum facilis asperiores reiciendis quo mollitia. Accusantium
//           odit minima deserunt. Maxime facere, distinctio veniam adipisci
//           expedita sunt soluta. Sunt ipsum eaque corporis eos deleniti, quos,
//           quis ullam non rem totam illo aut unde delectus architecto corrupti
//           beatae inventore debitis exercitationem maxime illum. Ab vel, officiis
//           distinctio iure impedit amet quam consequatur quod assumenda possimus
//           nam sunt iste natus totam aperiam nisi illum, adipisci facere sapiente
//           accusamus? Quas placeat deleniti in laborum delectus asperiores quasi
//           provident. Numquam odit minima eius ab, doloribus quibusdam nesciunt
//           rerum dolorem illum quod deserunt blanditiis unde recusandae molestiae
//           animi corporis quae quasi culpa obcaecati praesentium? Doloribus quod
//           doloremque mollitia! Cumque similique rerum facilis expedita provident
//           maxime, numquam dolorem sed deleniti qui illum magni, nisi soluta
//           dicta possimus enim ullam incidunt, nihil doloremque beatae labore
//           nemo recusandae nesciunt. Officia aspernatur labore, deleniti, libero
//           cumque minus nobis non dolorem optio eius nulla, error est eum quos
//           exercitationem quae enim totam. Quisquam laudantium assumenda culpa et
//           nostrum? Aliquam ea, explicabo delectus quibusdam veritatis at
//           repellendus ratione voluptas incidunt. Est hic adipisci ipsum eius!
//           Fuga mollitia illo dolorem non aspernatur eaque earum totam sunt hic
//           dolores, explicabo pariatur sint voluptas ex temporibus, assumenda
//           perferendis quis? Sapiente nisi enim accusantium maxime dicta adipisci
//           earum deserunt veniam, magni, vero blanditiis praesentium voluptatem
//           fugiat dolorem minus at suscipit ratione ex ipsa ipsam atque harum!
//           Eveniet consequatur unde alias aut, magnam eum totam quibusdam commodi
//           excepturi ipsam, consequuntur dolore delectus perferendis ea quisquam
//           amet impedit ad, voluptate eaque? Dolorem debitis cum iure est,
//           voluptatem tempore eaque inventore excepturi fuga voluptate provident
//           quaerat, animi laborum earum? Delectus repellat, ad incidunt, officia
//           debitis blanditiis ut nobis rem dolores neque quisquam. Aliquid nobis
//           enim neque voluptate perspiciatis deserunt minus harum officia soluta,
//           at a reiciendis. Debitis nemo soluta similique magni rem atque
//           dignissimos fugit explicabo repellat necessitatibus voluptate
//           voluptatibus accusantium minus tempora, distinctio totam esse delectus
//           cupiditate ea porro. Explicabo repellat cum cumque omnis aliquid
//           numquam ea laborum quam nam perspiciatis vero quasi pariatur
//           laudantium et atque quis quibusdam asperiores, tempora sed consequatur
//           ex. Maxime, excepturi sequi dicta minima animi, asperiores,
//           voluptatibus sit dolore est vitae ab deleniti! Nemo exercitationem
//           iusto consequuntur animi est deleniti aut officiis ad. Qui error ex
//           explicabo temporibus recusandae, quibusdam placeat expedita corrupti
//           tempore beatae quidem quod ducimus veritatis repellat, ab commodi,
//           modi impedit blanditiis quasi nihil tenetur! Recusandae quos porro,
//           minima obcaecati possimus doloremque quia magni at molestias quisquam
//           autem fugit placeat libero dolorem maxime maiores molestiae aliquam
//           atque velit earum corrupti! Eos rem ullam architecto, delectus
//           voluptatem nihil vero, iure reiciendis placeat cum fugiat doloremque
//           molestias aliquid eveniet! Numquam recusandae ipsum itaque nostrum
//           architecto, distinctio officiis excepturi deleniti vitae aperiam
//           ratione? Quam inventore in labore amet, harum doloribus fugit iusto,
//           incidunt rem temporibus numquam qui repellat sequi consequatur. Id eos
//           at amet minus labore eligendi quod exercitationem placeat? Id,
//           exercitationem ipsum. Eaque, consequatur sunt? Laudantium
//           reprehenderit numquam iste cumque deleniti fugit eveniet perferendis
//           earum tempora repellat! Optio nam architecto ad neque iste
//           reprehenderit sit vel quia id ab laudantium, accusantium dolore, sint
//           iusto deserunt et veritatis similique adipisci repudiandae possimus
//           unde harum. Necessitatibus dolores molestias ratione numquam repellat
//           officiis inventore, obcaecati suscipit odio itaque, aspernatur minus
//           voluptatum similique velit placeat fugiat! Pariatur dolor deserunt
//           reprehenderit perferendis repellat, iste qui doloremque. Facere ipsa
//           distinctio repellat pariatur neque quas, ipsam itaque quia. Dolore
//           pariatur aliquam incidunt provident nisi, at harum accusamus! Earum
//           adipisci distinctio odio, corrupti nam laborum explicabo, ut doloribus
//           facilis eius qui autem! Ipsa hic deleniti veritatis tempore, veniam
//           odio sit, suscipit repudiandae labore modi culpa, dolorum minus
//           consectetur ex natus cumque ea officia. Praesentium tempore voluptate,
//           neque doloremque in rerum veniam et consequuntur ullam dolorum culpa,
//           sapiente vitae fugiat totam sequi eligendi quae quos earum eius optio
//           aliquid architecto aperiam ab. Ea porro eius, unde est, odio sed eos
//           libero velit asperiores dolore vel nobis earum aperiam, voluptatum
//           corrupti ex placeat optio praesentium pariatur aliquam rerum. Beatae
//           praesentium non tenetur maiores temporibus ad sed minus nulla itaque
//           repellendus cumque recusandae ex, harum reiciendis, ullam magnam
//           veritatis maxime repellat vitae aperiam quibusdam consequuntur eum.
//           Minima adipisci iusto error deserunt pariatur corrupti. Laboriosam,
//           expedita necessitatibus. Quidem consequuntur laboriosam expedita,
//           provident dolor cum aliquid debitis mollitia similique eligendi eos
//           adipisci vel ut repudiandae repellendus quas laudantium, quasi ab
//           ducimus quod incidunt pariatur non. Sequi, ea? Laboriosam molestiae
//           eveniet ullam suscipit blanditiis soluta, nihil tempore alias, porro
//           numquam repudiandae earum magnam magni nisi quos accusamus dolor nam
//           at dolore sapiente ratione! Ratione odio possimus nesciunt beatae,
//           iure cumque? Maiores sapiente laudantium itaque labore eum aliquam est
//           officiis. Voluptates aperiam omnis consequuntur! Ullam explicabo
//           necessitatibus corporis quas culpa officiis, temporibus saepe fuga
//           tenetur vitae. Iste sapiente, eveniet eius nostrum veniam unde nam
//           earum soluta quisquam distinctio sequi vel voluptate at illo fugit,
//           suscipit quibusdam enim aspernatur quis ipsa? Fuga amet suscipit ea
//           vel aperiam! Saepe adipisci a ratione voluptates? Fugit, placeat
//           mollitia? Ut quasi facilis dignissimos cupiditate molestiae
//           perspiciatis, corrupti voluptates, ad quibusdam quis, quos laboriosam
//           voluptatibus. Voluptatum aut quam, fugiat illo rem mollitia eveniet.
//           Sequi perferendis necessitatibus natus beatae rerum dolores animi
//           minima consectetur eos officiis ducimus dolorum laudantium quo sunt
//           sit eaque ipsum commodi qui aut aliquid voluptates provident,
//           recusandae aperiam? Ut doloribus praesentium, eaque corrupti
//           recusandae nobis inventore numquam? Sit quo commodi voluptatem totam
//           optio nostrum deserunt quaerat, nobis molestiae libero accusamus saepe
//           incidunt culpa ipsa esse est. Unde quam minus quod, ab, pariatur vitae
//           porro sit illo hic, quae ex nostrum nihil repellat eaque totam modi
//           quaerat veritatis laborum possimus molestiae voluptate nobis.
//           Similique molestiae dolor doloribus quaerat molestias eos ipsa
//           reiciendis cumque ipsum deleniti suscipit dicta blanditiis corrupti
//           numquam tenetur praesentium explicabo dolores voluptatum, nesciunt
//           repudiandae voluptatibus illo!
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default FilterProperties;

// // function App() {
// //   return (
// //     <>
// //       {/* <Button variant="primary" onClick={() => setModalShow(true)}>
// //         Launch vertically centered modal
// //       </Button> */}
// //     </>
// //   );
// // }

// // render(<App />);
