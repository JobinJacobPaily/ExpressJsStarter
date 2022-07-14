const successResponse = (res , data ,constant) => {
    let response = {
        "Status": {
            'statusCode': 20001,
            'statusMessage': "success"
        },
        "Data": data
    }

    if( constant.debugStatus === 1) {
        response.Status.apiId = constant.apiId;
        response.Status.startTime = constant.startTime;
        response.Status.endTime = constant.endTime;
        response.Status.debugStatus = constant.debugStatus;
    }

    res.status(200).json(response);
}

const errorResponse = (res , data ,constant) => {
    let response = {
        "Status": {
            'statusCode': 20002,
            'statusMessage': "error"
        },
        "Data": data
    }

    if( constant.debugStatus === 1) {
        response.Status.apiId = constant.apiId;
        response.Status.startTime = constant.startTime;
        response.Status.endTime = constant.endTime;
        response.Status.debugStatus = constant.debugStatus;
    }

    res.status(200).json(response);
}

module.exports ={
    successResponse,
    errorResponse
}