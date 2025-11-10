import Card from "./components/Card";
import pucpLogo from "../../assets/universidades/pucp.webp";
import unacLogo from "../../assets/universidades/unac.png";
import unfvLogo from "../../assets/universidades/unfv.webp";
import upcLogo from "../../assets/universidades/upc.png";
import unmsmLogo from "../../assets/universidades/unmsm.jpg";

export default function UniversidadPage() {
  const universities = [
    {
      imageUrl: pucpLogo,
      name: "Universidad Católica del Perú",
      shortDescription:
        "Institución privada de prestigio reconocida por su excelencia académica y formación integral. Ofrece una amplia variedad de carreras profesionales con enfoque en investigación y responsabilidad social.",
    },
    {
      imageUrl: unmsmLogo,
      name: "Universidad Nacional Mayor de San Marcos",
      shortDescription:
        'La universidad más antigua de América, conocida como "Decana de América". Institución pública líder en investigación y formación profesional de calidad con gran tradición académica.',
    },
    {
      imageUrl: upcLogo,
      name: "Universidad Peruana de Ciencias Aplicadas",
      shortDescription:
        "Universidad privada enfocada en la innovación y la aplicación práctica del conocimiento. Destaca por su modelo educativo moderno orientado al mercado laboral actual.",
    },
    {
      imageUrl: unacLogo,
      name: "Universidad Nacional del Callao",
      shortDescription:
        "Institución pública ubicada en la región del Callao, reconocida por sus programas en ingeniería, ciencias de la salud y ciencias económicas. Comprometida con el desarrollo regional.",
    },
    {
      imageUrl: unfvLogo,
      name: "Universidad Nacional Federico Villareal",
      shortDescription:
        "Universidad pública con amplia trayectoria formando profesionales en diversas áreas del conocimiento. Destacada por su compromiso con la educación de calidad y accesible.",
    },
  ];

  return (
    <div className="h-full overflow-scroll no-scrollbar">
      <div className="py-10 text-center">
        <h2
          className="font-sf font-semibold leading-[0.8] md:m-0 m-auto
            text-[40px] md:text-[40px] lg:text-[60px]"
        >
          <span className="">Universidades</span>&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A629FF] to-[#1DD1CB]">
            profesionales
          </span>
        </h2>
        <p className="py-10">
          Estas son las principales universidades que ofrecen carreras de tu
          vocación.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 text-center flex-wrap">
        {universities.map((university, index) => {
          return <Card key={index} {...university} />;
        })}
      </div>
    </div>
  );
}
