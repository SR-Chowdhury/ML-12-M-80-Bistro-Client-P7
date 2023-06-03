/**
 * ------------------------------------
 *              Basic
 * ------------------------------------
 * 1. do not show the link to them who should not see it
 *    N>B> only show to them who should see it
 * 2. Do not allow to visit the link by typing on the url
 *    N>B> use AdminRoute that will check whether the user is admin or not;
 *    If not admin redirect to login / home
 * 
 * 
 * ------------------------------------
 *              To Send Data
 * ------------------------------------
 * 1. verify jwt token (send authorization token in the header to the server)
 *    N>B> if possible use axios to send jwt token by intercepting the request
 * 2. If it is an admint activity make sure only admin is posting data by using verifyAdmin
 */

