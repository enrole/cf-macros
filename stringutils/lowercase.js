//  Enrole Inc.
//  Copyright (C) - 2020
//
//  File Name: stringutils/lowercase.js
//  Description: Handler Lowercase CloudFormation macro
//  Creation Date: 7/31/21
//
//  This file is owned by Enrole Inc.
//
//  Distribution and duplication of this source code outside of the organization
//  is prohibited.

exports.lowercase = async (event) => {
  let response = {
    requestId: event.requestId,
  };

  const input = event.params.InputString;

  try {
    // process string to lowercase
    const result = `${input.toString().toLowerCase()}`;

    response.fragment = result;
    response.status = "success";

    return response;
  } catch (err) {
    console.log(err);

    response.errorMessage = err.toString();
    response.status = "failure";

    return response;
  }
};
