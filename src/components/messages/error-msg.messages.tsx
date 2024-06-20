interface Props {
  error: string;
}
function ErrorMsg({ error }: Props) {
  return (
    <>
      {error === "" && <div className="h-[1.5rem]"></div>}
      {error && <p className={"text-red-600"}>{error}</p>}
    </>
  );
}

export default ErrorMsg;
