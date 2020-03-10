class viewCongig {
    constructor(){
        const possibleviews = ['day','week','month', 'list']
        this.config = {
            view: "month"
        }
    }


    getViewConfig(configPart) {
        if (configPart == null) {
            return this.config;
        } else {
            return this.config.configPart
        }


    }


    setViewConfig(configPart, config) {
        if (configPart == null) {
            this.config = config;
            
        } else {
            this.config.configPart = value;
        }
    }

}