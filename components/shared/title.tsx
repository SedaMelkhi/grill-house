export const Title = ({ value }: { value: string }) => {
  return (
    <div className="block">
      <h1 className=" font-[500] text-[20px] md:text-[32px] xl:text-[36px]">
        {value}
      </h1>
    </div>
  );
};
