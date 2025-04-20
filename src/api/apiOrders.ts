const getOrders = async () => {
    const response = await fetch("https://true.tabs.sale/fusion/v1/datasheets/dstl40zrXoH2HheDug/records?viewId=viwcis74pDXMT&fieldKey=name", {
        headers: {
            Authorization: "Bearer uskZUWYuDIOPLDcwkxLEWfI"
        }
    });

    const data = await response.json();
    return data;
};

const getGoods = async () => {
    const response = await fetch("https://true.tabs.sale/fusion/v1/datasheets/dstXFd44w7UBFj1Hto/records?viewId=viweo1seC0aMx&fieldKey=name", {
        headers: {
            Authorization: "Bearer uskZUWYuDIOPLDcwkxLEWfI"
        }
    });

    const data = await response.json();
    return data;
};

export const fetchOrdersAndGoods = async () => {
    try {
        const [orders, goods] = await
            Promise.all([getOrders(), getGoods()]);
        return { orders, goods };
    }
    catch (error) {
        console.error("Ошибка при загрузки данных", error);
        throw error;
    }
}
