import { useContext, useState } from "react";
import { galleryBg } from "../../assets";
import { ecatalogue } from "../../constants";
import { LanguageContext } from "../../context/LanguageContext";
import Modal from "../../hoc/Modal";
import { styles } from "../../styles";

export default function ECatalogue() {
  const { lang } = useContext(LanguageContext);
  const [pdfState, setPdfState] = useState(null);
  const handlePdf = (pdf) => {
    setPdfState(pdf);
  };
  return (
    <section className="relative w-full p-20">
      <div>
        <img className="h-96 w-full" src={galleryBg} alt="bg--gallery-photo" />
        <div className="absolute inset-0 top-[120px]  max-w-7xl px-0 py-16 flex flex-row items-start gap-5 h-fit">
          <h1 className={`${styles.heroHeadText} text-white  mb-12  mx-auto`}>
            {ecatalogue.title[lang]}
          </h1>
        </div>
      </div>
      <div className="p-20">
        <table className="table table-auto w-full border">
          <thead className="table-header-group border-b h-12">
            <tr className="bg-[#1d1836]" key="thead-row">
              <th className="border">{ecatalogue.table.name[lang]}</th>
              <th className="">{ecatalogue.table.date[lang]}</th>
            </tr>
          </thead>
          <tbody className="table-row-group">
            {ecatalogue.pdfs?.map((pdf) => (
              <tr
                onClick={() => handlePdf(pdf)}
                key={pdf.name}
                className="tbody-row cursor-pointer  hover:transition hover:bg-[#1c124e] border"
              >
                <td className="cursor-pointer border-spacing-3 text-center border">
                  {pdf.name}
                </td>
                <td className="text-center p-2">{pdf.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        open={pdfState ? true : false}
        onHide={() => setPdfState(null)}
        title={pdfState?.name}
      >
        <embed
          src={pdfState?.pdf}
          className="w-full h-35"
          type="application/pdf"
        />
      </Modal>
    </section>
  );
}
