class ObservatoryWeatherService extends IWeatherService {
    private _weatherWarningWebPath: string = "http://rss.weather.gov.hk/rss/WeatherWarningSummaryv2_uc.xml";

    findCurrentObservation(latitude: number, longitude: number, doneCallback: JQueryPromiseCallback<any>, failCallBack: JQueryPromiseCallback<any>)
    {
        throw new Error("Not implmement yet.");
    }

    findWeatherWarnings(doneCallback: JQueryPromiseCallback<any>, failCallBack: JQueryPromiseCallback<any>) {
        let result: Array<WeatherWarning> = [];
        jQuery.ajax({
            url: this._weatherWarningWebPath,
            async: false,
            success: function (data: any) {
                let xmlDocument: XMLDocument = jQuery.parseXML(data.documentElement.innerHTML);
                if (xmlDocument != null) {
                    let items = xmlDocument.getElementsByTagName("item");
                    for (let i: number = 0; i < items.length; i++) {
                        /*
                         *  Resolve XML markup.
                         *  Format:
                         *  <title><![CDATA[發出酷熱天氣警告 (12:10 HKT 05/06/2017) ]]></title>
                         *  <link>http://www.weather.gov.hk/textonly/warning/warnc.htm</link>
                         *  <description><![CDATA[酷熱天氣警告在12時10分發出( 2017年6月5日 )。 <br/><br/>]]></description>
                         *  <author>香港天文台</author>
                         *  <pubDate>Mon, 05 Jun 2017 12:10:00 +0800</pubDate>
                         *  <guid isPermaLink="false">http://rss.weather.gov.hk/rss/201706051210/發出酷熱天氣警告</guid>
                         */
                        let weatherWarning: WeatherWarning = new WeatherWarning();
                        weatherWarning.name = items.item(i).getElementsByTagName("description")[0].textContent;
                        weatherWarning.publishDate = new Date(items.item(i).getElementsByTagName("pubDate")[0].textContent);
                        result[result.length] = weatherWarning;
                    }
                }
                let weatherWarningRenderer: WeatherWarningRenderer = new WeatherWarningRenderer(document.getElementById("weatherWarning"));
                weatherWarningRenderer.render(result);
                return result;
            }
        });
    }
}