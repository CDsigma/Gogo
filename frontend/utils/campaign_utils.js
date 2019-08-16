export const createNewCampaign = campaign => {
    return $.ajax({
        method: 'POST',
        url: '/api/campaigns',
        data: {campaign}
    })
}

export const updateCampaign = campaign => {
    // debugger
    return $.ajax({
        method: 'PATCH',
        url: `/api/campaigns/${campaign.id}`,
        data: {campaign}
    })
}

export const getCampaign = campaignID => {
    return $.ajax({
        url: `/api/campaigns/${campaignID}`,
        method: 'GET',
    })
}

export const getCampaigns = () => {
    return $.ajax({
        url: '/api/campaigns',
        method: 'GET'
    })
}