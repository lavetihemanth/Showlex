import { IoMdStar } from "react-icons/io";

const ShowsCard = ({ itemData, itemType }) => {
  return (
      <article className={`card-info rounded-2xl text-white ${itemType === "ALL_SHOWS" ? 'hover:relative hover:z-30 transition-all hover:scale-125 hover:drop-shadow-[0_0_4px_#000] group' : ''}`}>
        <div className="w-full h-60 xxs:h-[276px] xs:h-60 overflow-hidden">
          <img className="w-full h-full aspect-auto" src={itemData?.image?.medium} alt={itemData?.name} />
        </div>
        <div className={`${itemType === "ALL_SHOWS" ? 'hidden absolute left-0 w-full group-hover:block group-hover:bg-zinc-900 group-hover:p-2' : ''}`}>
          <div className={`${itemType === "ALL_SHOWS" ? 'flex items-center justify-between flex-wrap' : 'hidden'}`}>
            <div className="item-title text-xs font-medium">
              {itemData?.name?.length > 16
                ? itemData?.name?.substring(0, 16) + "..."
                : itemData?.name}
            </div>

            {itemType === "ALL_SHOWS" && (
                <>
                  <div className="rating flex items-center">
                    <span className="text-xs text-green-500 mr-1"><IoMdStar /></span>
                    <p className="rating-value text-xs font-medium">
                      {itemData?.rating?.average || "NA"}
                    </p>
                  </div>
                  <div className="genre">
                    <div className="py-2 text-xs">
                      <span className="font-medium">Genre{" "}:</span>{" "}
                      <p className="py-2 inline text-[10px] font-light">
                        {itemData?.genres?.length > 0 &&
                          itemData?.genres?.join(", ")}
                      </p>
                    </div>
                  </div>
                </>
              )
            }

            
          </div>
        </div>
      </article>
  );
};

export default ShowsCard;