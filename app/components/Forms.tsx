import Image from "next/image";

interface FormLinkProps {
  name: string;
  href: string;
  subtext?: string;
  img?: string;
  children?: any;
}

const FormCard = ({ name, href, img, subtext }: FormLinkProps) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("The link was clicked.");
    // Open href in new tab
    window.open(href, "_blank");
  };

  return (
    <div className="flex max-w-sm">
      <div className="bg-red-500 bg-opacity-50 rounded-2xl shadow-lg p-6 border-2 border-yellow-600">
        <div className="flex flex-col items-center">
          <div className="bg-white bg-opacity-50 rounded-full h-36 w-36 mb-4 flex items-center justify-center">
            <Image
              src={img ? img : "/logo.jpg"}
              alt=""
              width={175}
              height={175}
              className="object-cover object-center w-full rounded-full dark:bg-gray-500"
            />
          </div>
          <h2 className="text-xl font-semibold tracki">{name}</h2>
          <p className="text-white text-center">
            {subtext ? subtext : "To learn about DAOs"}
          </p>
          <div className="flex flex-col justify-between p-2 space-y-2">
            <button
              onClick={handleClick}
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Forms = () => {
  const forms: FormLinkProps[] = [
    {
      name: "DAO Apprentice",
      subtext: "To learn about DAOs",
      href: "https://tally.so/r/w8Zq0l",
    },
    {
      name: "DAO Builder",
      subtext: "To accelerate your DAO",
      href: "https://tally.so/r/w8Zq0l",
    },
    {
      name: "DAO Veteran",
      subtext: "To pass on wisdom",
      img: "/logo_veteran.png",
      href: "https://tally.so/r/mJlYzR",
    },
  ];
  return (
    <div className="max-w-screen flex flex-col mt-20 justify-center mb-60">
      <span className="flex text-4xl justify-center my-10 font-pixelify">
        Sign up as...
      </span>
      <div className="flex flex-row space-x-6 justify-center m-4 mb-10">
        {forms.map((t, i) => (
          <FormCard
            key={i}
            name={t.name}
            href={t.href}
            img={t.img}
            subtext={t.subtext}
          />
        ))}
      </div>

      <span className="flex text-4xl justify-center my-10 font-pixelify">
        Then jump in:{" "}
      </span>
      <div className="flex flex-row space-x-6 justify-center m-4">
        <a
          href="https://t.me/daocember"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/tg_logo_yellow.jpg"
            alt="Telegram"
            width={100}
            height={100}
            className="object-cover object-center w-full rounded-t-m drop-shadow-2xl"
          />
        </a>
      </div>
    </div>
  );
};

export default Forms;
