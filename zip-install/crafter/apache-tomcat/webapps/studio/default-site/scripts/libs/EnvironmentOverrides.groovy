package scripts.libs

import scripts.api.SiteServices;

class EnvironmentOverrides {

	static getValuesForSite(appContext, request) {
		 
		def result = [:]
		def serverProperties = appContext.get("studio.crafter.properties")
		def cookies = request.getCookies();

		result.environment = serverProperties["environment"]  
		result.alfrescoUrl = serverProperties["alfrescoUrl"]  
		 
		result.role = "author" // default

  
		try {		
			result.user = request.getSession().getValue("username")
			result.ticket = request.getSession().getValue("alf_ticket")
			result.site = Cookies.getCookieValue("crafterSite", request)
    		def context = SiteServices.createContext(appContext, request)
    		def sites = SiteServices.getUserSites(context, result.user)

			result.siteTitle = result.site +sites.size;

 
			 for(int j = 0; j < sites.size; j++) {
		        def site = sites[j];
		        if(site.siteId == result.site) {
		     		result.siteTitle = site.name;
		     		break;
		     	}
		     }

//		      result.previewServerUrl = config["preview-server-url"];
//		      result.authoringServerUrl = config["authoring-server-url"]
//		      result.formServerUrl = "NOT AVAILABLE"
//		      result.liveServerUrl = config["live-server-url"]
//		      result.publishingChannels = config["publishing-channels"]
//		      result.openSiteDropdown = config["open-site-dropdown"]
		  }
		  catch(err) {
		     result.err = err
		     throw new Exception(err)
		  }
		  
	      return result;
	}
}