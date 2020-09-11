const vault = require('./ref/index')();


exports.handler = async function (event, context) {
  //process.env.DEBUG = 'node-vault'; // switch on debug mode
  // setting with GitHub Actions
  const roleId =  process.env.roleid 
  console.log('RoleID from Github Acitons' + roleId)
  // this vaule will be seeting with Terraform Apply
  const secretId = process.env.secretid 
  console.log('SecretId from Terraform Apply' + secretId)
  return vault.approleLogin({ role_id: roleId, secret_id: secretId })
}

/*
vault.auths()
//.then(() => Promise.all([vault.getApproleRoleSecret({ role_name: roleName })]))
.then(() => {
  //const roleId = result[0].data.role_id;
  const roleId = "161d5642-757e-c355-2f47-e222a16313d1" ;
 //const roleId =  process.env.roleid ;
  console.log(roleId) ;
 
  //const secretId = result[0].data.secret_id;
  const secretId = "c79b1d38-bb68-e8da-80ae-d4fa673894ec"
  console.log(secretId) ;
  return vault.approleLogin({ role_id: roleId, secret_id: secretId });
})
.then((result) => {
  console.log(result);
})
.catch((err) => console.error(err.message));

  var response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
    body: '<p>안녕하세요..... 버전은 2_0_3입니다.</p>' + result[0].data.role_id + 'secretid' + process.env.secretid,
  }
  callback(null, response)
}
*/