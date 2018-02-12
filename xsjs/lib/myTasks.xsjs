/*eslint no-console: 0, no-unused-vars: 0, quotes: 0 */
function create() {
	var conn;
	conn = $.hdb.getConnection();
	var ts = new Date().toISOString();
	conn.executeUpdate('INSERT INTO "xsaJobsXSJS.db::tables.MyTable" ("created") VALUES(?)',ts);
	conn.commit();
	conn.close();	
	console.log("myTasks.xsjs:create: ", ts);
}