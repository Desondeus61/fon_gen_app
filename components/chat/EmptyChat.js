import SuggestedPrompt from "./SuggestedPrompt";

export default function EmptyChat({onClickSuggested}) {
  return (
    <div classNameName="flex flex-col justify-center  items-center min-h-[200px] w-full">
      <div
        className="section-title text-center sal-animate"
        data-sal="slide-up"
        data-sal-duration="700"
        data-sal-delay="100"
      >
        <h4 className="subtitle ">
          <span className="theme-gradient">BlayMax AI</span>
        </h4>
        <h2 className="title w-600 mb--20">Fon-Yoruba-Dendi</h2>
        <p className="description b1">
         Mi ku a bo do agbaellossa
        </p>
      </div>
      <div className="genarator-section">
                                        <ul className="genarator-card-group">
                                            
                                            <SuggestedPrompt message={"Xwa ɔ hwéhuhu sín wlɛnwin ɖe wɛ bɔ̀ hwéhutɔ lɛ zán ɖo Nɔxwe tɔ kpo Ayémé tɔ kpo Xɔgbonu tɔ ɔ kpo mɛ."} onClick={onClickSuggested} />
                                            <SuggestedPrompt message={"Togan Mathieu Kéréku yawu do bo ylɔ tovi lɛ kpodo ahwanfuntɔ to ɔ tɔn lɛ kpan gbɔn Hladio. Xo é e ɖɔ ɔ ɖié"} onClick={onClickSuggested} />
                                        </ul>
                                    </div>
    </div>
  );
}
