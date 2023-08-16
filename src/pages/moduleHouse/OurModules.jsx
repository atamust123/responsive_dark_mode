import { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import {
  bedroomPlus1,
  bedroomPlus2,
  bedroomPlus3,
  dome,
  masterBathroom1,
  masterBathroom2,
  masterBathroom3,
  moduleAquarium1,
  moduleAquarium2,
  moduleAquarium3,
  moduleBathroom1,
  moduleBathroom2,
  moduleBedroom1,
  moduleBedroom2,
  moduleBedroom3,
  moduleFront1,
  moduleFront2,
  moduleFront3,
  moduleKitchen1,
  moduleKitchen2,
  moduleKitchen3,
  moduleLivingroom1,
  moduleLivingroom2,
  moduleLivingroom3,
  modulePatio1,
  modulePatio2,
  modulePatio3,
  moduleSstandart3,
  moduleStandart1,
  moduleStandart2,
} from "../../assets";
import { ButtonDefault, ProjectCard, SlideGallery } from "../../hoc";
import Modal from "../../hoc/Modal";
import { styles } from "../../styles";

export default function OurModules() {
  const navigate = useNavigate();
  const [openedSlide, setOpen] = useState(null);
  return (
    <section className="relative w-full mx-auto pt-20 px-16">
      <div>
        <img className="h-96 w-full" src={dome} alt="bg--gallery-photo" />
        <div className="absolute inset-0 top-[120px]  max-w-7xl px-0 py-16 flex flex-row items-start gap-5 h-fit">
          <h1 className={`${styles.heroHeadText} text-white  mb-12  mx-auto`}>
            Our Modules
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 my-10 place-items-center">
        {slides.map((slide) => {
          return (
            <ProjectCard
              name={slide.title}
              image={slide.src[0]}
              key={slide.title.toString()}
              buttonProps={{
                title: (
                  <div className="flex items-center gap-2">
                    <HiShoppingCart /> Inspect
                  </div>
                ),
                onClick: () => {
                  navigate(`?module=${slide.id}`);
                  setOpen(slide);
                },
              }}
            />
          );
        })}
      </div>
      <Modal
        onHide={() => {
          navigate("/our-modules");
          setOpen(null);
        }}
        open={!!openedSlide}
        key={openedSlide?.id || "modal-key"}
      >
        <div className="flex flex-1 gap-10">
          <div className="w-1/2">
            <h1 className="text-4xl text-orange-300 mb-8">Gallery</h1>
            <SlideGallery
              slides={openedSlide?.src?.map((src) => ({
                src,
                width: 720,
                height: 720,
              }))}
            />
            <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="py-2">
              <ButtonDefault title="Add An Order" />
            </div>
          </div>
          <div class="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
          <div className="w-1/2">
            <h1 className="text-4xl text-orange-300 mb-8">
              {openedSlide?.title}
            </h1>
            <p className="text-sm">{openedSlide?.description}</p>
          </div>
        </div>
      </Modal>
    </section>
  );
}

const slides = [
  {
    src: [moduleStandart1, moduleStandart2, moduleSstandart3],
    width: 720,
    height: 720,
    title: "Module Standart",
    id: "module-standart",
    description:
      "Standart Modül, Tiny House tasarımında en özgür ve kişiselleştirilebilir alanları yaratmak için ideal bir seçenektir. Herhangi bir alana eklenerek kullanılabilen bu modül, ihtiyaçlarınıza göre yeni alanlar yaratmanıza olanak tanır. Kendi evinizi yaratırken sınırsız hayal gücünüzü kullanarak farklı birçok kullanım alanı yaratabilirsiniz. Tüm bu özellikleriyle, Standart Modül sizin hayallerinizi gerçeğe dönüştürmeniz için tasarlanmıştır.",
  },
  {
    src: [moduleLivingroom1, moduleLivingroom2, moduleLivingroom3],
    width: 720,
    height: 720,
    title: "Module Livingroom",
    id: "module-livingroom",
    description:
      "Yaşam alanı modülü, diğer tiny house tasarımlarından sıyrılarak kendine özgü bir özellik sunar. Duvarlardan tavana doğru yayılan 75 cm genişliğinde kavisli bir cam, doğanın güzelliklerini yaşam alanınızda hissetmenizi sağlar. Gündüz bulutların, gece ise yıldızların keyfini çıkarabileceğiniz bu cam sayesinde, iç mekana huzur ve doğal bir aydınlık kazandırabilirsiniz. Ayrıca bu modül, yatak odası ve banyo olarak da tercih edilebilir, evinizin tasarımını kişiselleştirmenize olanak tanır. Bu benzersiz yaşam alanı modülü, size konforlu ve modern bir yaşam sunmak için tasarlandı.",
  },
  {
    src: [masterBathroom1, masterBathroom2, masterBathroom3],
    width: 720,
    height: 720,
    title: "Module Master Bathroom",
    id: "module-master-bathroom",
    description:
      "Modüllerimizin en kullanışlı ve şık olanlarından biri banyo modülüdür. Bu modül, standart tüm donanımlara sahip olmakla birlikte yuvarlak lomboz camları ile dekoratif bir hava katmaktadır. Kabin duşu, ayaklı lavabosu ve klozeti ile banyo ihtiyaçlarınızı karşılamak için tasarlanmıştır. Banyo modülü, hem koridor tarafında hem de banyo içindeki camları sayesinde doğal ışık alarak ferah bir alan yaratır. Tüm bunlarla birlikte, banyonuzu kişiselleştirmeniz için birçok seçenek sunmaktadır.",
  },
  {
    src: [modulePatio1, modulePatio2, modulePatio3],
    width: 720,
    height: 720,
    title: "Module Patio",
    id: "module-patio",
    description: `Veranda modülü, Tiny House'unuzun en sevilen seçeneklerinden biridir. Hem girişinize hem de yatak odası modülünüze eklenebilen bu modül, arazinizin yapısına uygun olarak önceden hazırlanmış merdivenlerle birlikte entegre edilir. Veranda modülü, açık alanda dinlenebilmeniz ve iyi vakit geçirebilmeniz için mükemmel bir olanak sağlar.

    Veranda modülü, açık ve rahat bir atmosfer sunarak evinizin yaşam alanını genişletir. Doğal güneş ışığından faydalanarak iç mekana aydınlık bir hava verir. Ayrıca, güzel bir manzaraya sahip olduğunuzda, veranda modülü size manzaranın tadını çıkarabileceğiniz bir yer sağlar.
    
    Tiny House'unuza veranda modülü ekleyerek evinizi kişiselleştirme fırsatı elde edersiniz. İster kitap okuyun, ister güneşte uzanın ya da arkadaşlarınızla sohbet edin, veranda modülü sizin için mükemmel bir mekan sağlayacaktır.`,
  },
  {
    src: [moduleFront1, moduleFront2, moduleFront3],
    width: 720,
    height: 720,
    title: "Module Front",
    id: "module-front",
    description:
      "Giriş Modülü adını verdiğimiz diğer modülümüz, Tiny House'a giriş yaptığımız ilk adımı oluşturuyor. Tamamen camdan bir cephesi ve ahşap çerçeveleri ile dikkat çekiyor. Kapısı da yine camdan tercih edilerek, doğal ışık alan ve modern bir görünüme sahip olması sağlanmıştır.",
  },
  {
    src: [moduleKitchen1, moduleKitchen2, moduleKitchen3],
    width: 720,
    height: 720,
    title: "Module Kitchen",
    id: "module-kitchen",
    description:
      "Mutfak modülü, tiny house'un en önemli alanlarından biridir. Burada bulunan standart ölçülerdeki tezgah, kullanım kolaylığı sağlar ve tercihe göre ankastre olarak kullanılabilen bir buzdolabı bölmesi bulunur. Ayrıca, tezgah altında bulaşık makinesi ve çamaşır makinesi için yeterli alan da sağlanır. Mutfak modülünün malzemesi, evin iç malzemesi ile aynıdır, böylece mutfak, evin diğer alanlarıyla uyum içinde olur. Minimal bir tasarıma sahip olan mutfak modülü, işlevselliği ve şıklığı bir arada sunar. Tiny house'un en özel alanı olan mutfağınızda keyifle vakit geçirebilirsiniz.",
  },
  {
    src: [moduleBedroom1, moduleBedroom2, moduleBedroom3],
    width: 720,
    height: 720,
    title: "Module Bedroom",
    id: "module-bedroom",
    description: `Yatak Odası Modülü - Şeffaf Tasarımın Zarafeti

    Yatak Odası Modülü, tamamen cam cephesiyle benzersiz bir tasarım sunuyor. İsteğinize bağlı olarak açılabilir bir veranda ekleyebilir veya cephedeki camlardan birini kapatıp bir gardırop alanı yaratabilirsiniz.
    
    Bu modül, yatak odanızda doğayla iç içe olmanızı sağlayan benzersiz bir deneyim sunuyor. Ayrıca, geniş saklama alanları sayesinde işlevselliği de arttırıyor.
    
    Yatak Odası Modülü, modern ve şık tasarımıyla evinize sıra dışı bir hava katıyor. İç mekanınıza doğal ışık girmesine izin vererek, ferah bir ortam yaratmanıza yardımcı oluyor.
    
    Doğanın güzelliğini evinize taşımak istiyorsanız, Yatak Odası Modülü tam size göre! Şeffaf tasarımın zarafetiyle evinizdeki yaşam alanınıza estetik bir dokunuş yapın.`,
  },
  {
    src: [bedroomPlus1, bedroomPlus2, bedroomPlus3],
    width: 720,
    height: 720,
    title: "Module Bedroom Plus",
    id: "module-bedroom-plus",
    description: `Yatak Odası Ek Modülü - Işığın Keyfini Çıkarın

    Yatak Odası Ek Modülü, her iki tarafında da yuvarlak lomboz camları ile tasarlanmıştır. Bu özellik, içeriye daha fazla gün ışığı girmesini istediğinizde tercih edebileceğiniz bir seçenektir. Ayrıca, bu modül diğer alanlar için de kullanılabilir ve tamamen kişisel tercihlerinize göre tasarlanabilir.
    
    Yatak Odası Ek Modülü, yaşam alanınızı zenginleştirmek ve sıradışı bir deneyim sunmak için tasarlanmıştır. Bu modül, yatak odanıza yeni bir boyut katarken aynı zamanda size daha fazla gün ışığı sağlar.
    
    Eğer evinizde daha fazla gün ışığı almak istiyorsanız, Yatak Odası Ek Modülü tam size göre! Bu modül sayesinde doğanın güzelliğini evinizde hissedecek ve kendinizi rahatlamış hissedeceksiniz.`,
  },
  {
    src: [moduleAquarium1, moduleAquarium2, moduleAquarium3],
    width: 720,
    height: 720,
    title: "Module Aquarium",
    id: "module-aquarium",
    description: `Elbette, aşağıda Akvaryum Modülü için bir açıklama metni sunuyorum:

      Akvaryum Modülü - doğanın içinde bir nefes alın
      
      Tasarladığımız Akvaryum Modülü, hayatınızı güzelleştirecek ve yaşam alanınızda sıradışı bir deneyim sunacak. Bu modül, yatak odası gibi alanlarda kullanılabileceği gibi, tercihe göre yaşam alanınızda da harika bir dekoratif öğe olarak yerini alabilir.
      
      Bu modülün en belirgin özelliği, 60cm çapında cam bir silindirin tabandan tavana kadar yerleştirilmiş olmasıdır. Bu sayede evinizin içine doğal ışık girmesini sağlarken, aynı zamanda bu alan içinde bir ağaç ekerek doğanın büyüleyici güzelliğine şahit olmanızı sağlar.
      
      Akvaryum Modülü, alışılmışın ötesinde bir tasarımı temsil eder. Bu modül sayesinde, yaşam alanınızın dekorunu tamamlayacak görsel bir cazibe yaratabilirsiniz. Ayrıca, bu modül sayesinde doğayla daha yakından temas etme imkanını da elde edebilirsiniz.
      
      Siz de evinize doğanın büyüleyici güzelliğini getirmek istiyorsanız, Akvaryum Modülü tam size göre! Bu modül sayesinde, kendinizi doğanın içinde bir nefes almış gibi hissedeceksiniz.`,
  },
  {
    src: [moduleBathroom1, moduleBathroom2],
    width: 720,
    height: 720,
    title: "Module Bathroom",
    id: "module-bathroom",
    description: `Modülümüzün adı: Mutfak-Banyo Modülü - İki İşlevli ve Şık.

    Mutfak-Banyo Modülümüz, mutfak ve banyonuzu tek bir yerde birleştiren işlevsel bir modüldür. Bu modül, 125cm genişliğinde bir tezgah alanı ve saklama alanları ile birlikte standart bir banyo alanı içermektedir.
    
    Modülün her iki ucunda da yuvarlak lomboz camlarımız sayesinde içeri doğal ışık girebilmektedir.
    
    Mutfak-Banyo Modülü, hem işlevsel hem de şık bir tasarıma sahiptir. Bu modül ile evinize modern bir dokunuş katabilir ve hem mutfağınızda hem de banyonuzda rahat bir kullanım deneyimi yaşayabilirsiniz.
    
    Eğer hem mutfak hem de banyo alanınızı aynı modülde birleştirmek istiyorsanız, Mutfak-Banyo Modülü tam size göre!`,
  },
];
