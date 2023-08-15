const style = {
  marginLeft: "calc(0px - 27% )",
};

const profileStyle = {
  width: "60px",
  height: "60px",
  borderWidth: "2px 2px 2px 2px",
  borderRadius: "50%",
};

const ArchitectureCompany = () => {
  return (
    <div className="flex mx-auto relative py-16 px-4" id="about-us">
      <div className="w-4/6">
        <img src="/img/s4.jpg" className="m-auto" style={{ maxWidth: "90%" }} />
        <div className="flex justify-evenly m-auto pt-4">
          <div>
            <h1 className={`text-4xl text-white`}>345</h1>
            <h6 className="text-orange-300 mb-12">Project Complete</h6>
          </div>
          <div>
            <h1 className={`text-4xl text-white`}>12k</h1>
            <h6 className="text-orange-300 mb-12">Statisfied Clients</h6>
          </div>
          <div>
            <h1 className={`text-4xl text-white`}>09</h1>
            <h6 className="text-orange-300 mb-12">Awards Won</h6>
          </div>
        </div>
      </div>
      <div className="w-2/6 relative flex flex-col p-4">
        <h6 className="underline underline-offset-1 text-orange-300 mb-12">
          ARCHITECTURE COMPANY
        </h6>

        <h1 className={`text-4xl text-white  mb-12`}>
          We Have 20 Years Of Experience In This Field.
        </h1>

        <p className="text-gray-400">
          With the understanding of being a reliable and given team with our
          experienced technical staff; We provide services in accordance with
          country and world standards without compromising the principles of
          timeliness along with customer satisfaction and quality.
        </p>

        <div className="absolute bg-black p-8 bottom-0" style={style}>
          <div>
            <p className="italic text-2xl text-gray-400  mb-8">
              "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit
              Tellus, Luctus Nec Ullamcorper Mattis, Pulvinar Dapibus Leo".
            </p>
            <div>
              <div className="flex items-center w-full h-full gap-4">
                <img
                  style={profileStyle}
                  src={"/img/cv.jpeg"}
                  alt={"experience.company_name"}
                  className="object-contain"
                />
                <div>
                  <h6
                    className={`underline underline-offset-1 text-orange-300`}
                  >
                    ATAKAN AYYILDIZ
                  </h6>
                  <p className="text-gray-500">Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureCompany;
