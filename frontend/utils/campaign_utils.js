export const createNewCampaign = campaign => {
    return $.ajax({
        method: 'POST',
        url: '/api/campaigns',
        data: {campaign}
    })
}

export const updateCampaign = campaign => {
    return $.ajax({
        method: 'PATCH',
        url: '/api/campaigns/edit',
        data: {campaign}
    })
}

export const getCampaigns = () => {
    return $.ajax({
        url: '/api/campaigns',
        method: 'GET'
    })
}