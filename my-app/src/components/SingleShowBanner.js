import { MdLanguage } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";

const SingleShowBanner = ({ showData }) => {
  const cleanText = showData?.summary?.replace(/<\/?[^>]+(>|$)/g, "");
  return (
    <section className="">
      <div className="my-0 mx-auto max-w-[1351px] px-0">
        <div className="min-h-[656px] py-14 px-9 flex justify-center items-center"
        style={{
          background: `linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0.00) 100%), url(${showData?.image?.original}) top/cover no-repeat fixed`,
        }}
        >
          <div className="max-w-[1000px] mx-auto text-center">
            <h1 className="font-medium text-white text-3xl drop-shadow-[2px_2px_4px_#262626]">{showData?.name}</h1>
            <div className="text-white font-medium text-sm mt-6">
                {showData?.summary?.length > 380 ? cleanText?.substring(0, 380) + " ..." : cleanText}
            </div>
            <div className="mt-6 gap-y-4 flex flex-col items-center">
              <div className="flex items-center flex-wrap gap-x-6">
                <p className="text-sm text-[#cbd5e1]">
                  <span className="font-medium text-white">Genre :{" "}</span>
                  <span className="font-normal text-xs">
                    {showData?.genres?.join(", ")}
                  </span>
                </p>
                <ul className="text-sm text-white gap-y-2 gap-x-6 flex items-center justify-center flex-wrap">
                  <li className="inline-flex items-center">
                    <span className="text-lg inline-flex items-center justify-center mr-1">
                      <MdLanguage />
                    </span>
                    <span>
                      {showData?.language}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center flex-wrap gap-x-6">
                <ul className="text-sm text-white gap-y-2 gap-x-6 flex items-center justify-center flex-wrap">
                  <li className="inline-flex items-center">
                    <span className="inline-flex items-center justify-center text-lg mr-1">
                      <CiCalendar />
                    </span>
                    <span className="font-medium mr-1">Released Date :</span>
                    <span className="font-normal text-xs text-[#cbd5e1]">{showData?.premiered}</span>
                  </li>
                  <li className="inline-flex items-center">
                  <span className="inline-flex items-center justify-center text-lg mr-1">
                    <IoMdStar />
                  </span>
                  <span>
                    {showData?.rating?.average}
                  </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleShowBanner