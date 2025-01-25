// import Image from 'next/image';

// type CardProps = {
//   title: string;
//   subtitle: string;
//   imageUrl: string;
//   price: string;
//   label?: string;
// };

// const Card = ({ title, subtitle, imageUrl,label }: CardProps) => (
//   <div>
//     <div className="relative">
//       <Image src={imageUrl} alt={title} loading = 'eager' objectFit="cover" width={500} height={500}  className='object-cover rounded-xl'/>
//       {label && (
//           <div className="absolute top-1 right-1 bg-[#F6E9CE] text-[#351120] px-4 py-2 text-sm rounded">{label}</div>
//         )}
//     </div>
//     <div className="p-4">
//       <h2 className="text-lg font-semibold">{title}</h2>
//       <p className="text-gray-600">{subtitle}</p>
//       {/* <div className="flex justify-between items-center mt-4">
//         <span className="text-xl font-bold">{price}</span>
//         {offer && <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded">{offer}</span>}
//       </div> */}
//     </div>
//   </div>
// );

// export default Card;
import Image from 'next/image';

type CardProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  price: string;
  label?: string;
};

const Card = ({ title, subtitle, imageUrl, label }: CardProps) => (
  <div className=" p-4 rounded-xl hover:shadow-lg transition-shadow">
    <div className="relative">
      <Image
        src={imageUrl}
        alt={title}
        objectFit="cover"
        width={500}
        height={500}
        className="object-cover rounded-xl"
      />
      {label && (
        <div className="absolute top-1 right-1 bg-[#F6E9CE] text-[#351120] px-4 py-2 text-sm rounded">{label}</div>
      )}
    </div>
    <div className="mt-4">
      <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 text-sm sm:text-base">{subtitle}</p>
    </div>
  </div>
);

export default Card;
