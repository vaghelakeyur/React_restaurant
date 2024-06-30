import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/ContactStyle.css";

const Contact = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col main_sec ">
            <p className="name_desing">Contact With My Restaurent</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <form action="" method="get">
              <div className="main_form_control">
                <div className="">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                  />
                </div>

                <div className="">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="Email"
                    className="form-control"
                    placeholder="Enter Email Address"
                    name="Email"
                  />
                </div>

                <div className="">
                  <label htmlFor="number" className="form-label">
                    Mo. Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Number"
                    name="Number"
                  />
                </div>
                <br />

                <button className="btn-submit">Submit</button>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 parent-paragraph ">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              voluptatem rerum, recusandae laborum cupiditate, ea mollitia
              dignissimos unde in quisquam magni nulla, libero provident
              deserunt illo voluptate? Nisi, ad voluptas. Minima earum excepturi
              error distinctio commodi omnis sapiente numquam, quis quo animi
              provident itaque rerum officia! Commodi fugit sed iusto. A
              assumenda similique tempora esse nobis facilis molestias dolor
              nemo? Et, odit exercitationem! Veniam in rem delectus laboriosam,
              sunt possimus, officiis maxime quas alias et blanditiis, soluta ab
              quod eos dignissimos quo ratione quasi impedit deserunt
              accusantium architecto vitae. Amet? Odit, quae labore id, placeat
              itaque aliquid esse eaque tenetur nesciunt sunt quod repellendus
              architecto sapiente? Dicta, quaerat repellat suscipit perferendis
              hic quisquam, a voluptate vitae, mollitia libero sequi facere.
              Distinctio dolorem incidunt, quod quidem debitis eius minus
              laborum reprehenderit enim veniam? Minus nam eveniet voluptate
              architecto id incidunt odit maxime, nemo ipsa atque obcaecati
              nesciunt voluptatibus cupiditate et quas. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Omnis, fugiat molestiae. Sint
              iste vel, blanditiis, est corporis rem ad nemo consequuntur
              veritatis incidunt soluta accusantium, deserunt quod harum?
              Molestias, ratione. Nesciunt, commodi? Quia cum vero, officia
              dolor possimus excepturi odio animi corporis ut quo reiciendis
              laborum aspernatur, nesciunt enim aliquid, esse pariatur modi.
              Ducimus quod officia eius corporis, neque quos.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
