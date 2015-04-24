
/*
 * Crafter Studio Web-content authoring solution
 * Copyright (C) 2007-2015 Crafter Software Corporation.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import scripts.api.DeploymentServices;

def result
def site = params.site;
def path = params.path;
/*
var valid = true;

if (site == undefined) {
    status.code = 400;
    status.message = "Site must be provided.";
    status.redirect = true;
    valid = false;
}
if (valid) {
    model.result = dmPublishService.getAvailablePublishingChannelGroups(site, path);
}*/
def context = DeploymentServices.createContext(applicationContext, request);
result = DeploymentServices.getAvailablePublishingChannelGroups(context, site, path);

return result;
