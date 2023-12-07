import model from "./model.js";

export const createCompanyDetails = (companyId, details) => {
    return model.create(
        {
            lastUpdated: new Date().getTime(),
            companyId: companyId,
            details: details
        }
    );
}

export const findCompanyById = (companyId) => {
    return model.findOne({companyId: parseInt(companyId)});
}

export const updateCompanyDetailsById = (companyId, details) => {
    return model.updateOne({companyId: parseInt(companyId)}, {
        $set: {
            details: details,
            lastUpdated: new Date().getTime()
        }
    });
}

export const deleteCompanyDetailsById = (companyId) => {
    return model.deleteOne({companyId: parseInt(companyId)});
}

