import Image from 'next/image';

interface TreatmentCardProps {
  title: string;
  description: string;
  imageSrc: string;
  label?: string;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ title, description, imageSrc, label }) => {
  return (
    <div className="bg-[#f8f8f8] rounded-lg overflow-hidden">
      <div className="relative">
        <Image src={imageSrc} alt={title} layout="responsive" width={500} height={500} className="object-cover rounded-xl" />
        {label && (
          <div className="absolute top-1 right-1 rounded-2xl bg-[#F6E9CE] text-[#351120] px-4 py-2 text-sm">{label}</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TreatmentCard;