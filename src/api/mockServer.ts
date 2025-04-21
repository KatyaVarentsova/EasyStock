import axios from "axios";

const urlUser =
  "https://true.tabs.sale/fusion/v1/datasheets/dstlr5pDegVHcXYZWA/records?viewId=viwXKQJReqX5j&fieldKey=name";

export const getUsers = async () => {
  try {
    const response = await axios.get(urlUser, {
      headers: {
        Authorization: "Bearer uskZUWYuDIOPLDcwkxLEWfI",
        "Content-Type": "application/json; charset=utf-8",
        "User-Agent": "PostmanRuntime/7.35.0",
      },
    });
    const users = response.data?.data?.records || [];
   
    return users;
  } catch (error) {
    console.error("Ошибка при получении пользователей:", error);
    return [];
  }
};

const urlSupply =
  "https://true.tabs.sale/fusion/v1/datasheets/dstvQqtRDwrBWjSQWA/records?viewId=viwPxupgqT0FT&fieldKey=name";

export const getSupply = async () => {
  try {
    const response = await axios.get(urlSupply, {
      headers: {
        Authorization: "Bearer uskZUWYuDIOPLDcwkxLEWfI",
        "Content-Type": "application/json; charset=utf-8",
        "User-Agent": "PostmanRuntime/7.35.0",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Ошибка при получении поставок:", error);
    return null;
  }
};

// const urlProducts = "https://true.tabs.sale/fusion/v1/datasheets/dstXFd44w7UBFj1Hto/records?viewId=viweo1seC0aMx&fieldKey=name";
const baseUrl =
  "https://true.tabs.sale/fusion/v1/datasheets/dstXFd44w7UBFj1Hto/records";
const viewId = "viweo1seC0aMx";
const fieldKey = "name";

export const getProductsByIds = async (ids) => {
  try {
    const query = ids.map((id) => `recordIds[]=${id}`).join("&");

    const response = await axios.get(
      `${baseUrl}?viewId=${viewId}&fieldKey=${fieldKey}&${query}`,
      {
        headers: {
          Authorization: "Bearer uskZUWYuDIOPLDcwkxLEWfI",
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );

    console.log("Полученные товары:", response.data?.data?.records);
    return response.data?.data?.records || [];
  } catch (error) {
    console.error("Ошибка при получении товаров:", error);
    return [];
  }
};

const PATCH_URL =
  "https://true.tabs.sale/fusion/v1/datasheets/dstvQqtRDwrBWjSQWA/records?viewId=viwPxupgqT0FT&fieldKey=name";

export const updateSupplyStatus = async (recordId, updatedFields) => {
  try {
    const payload = {
      records: [
        {
          recordId,
          fields: updatedFields,
        },
      ],
      fieldKey: "name",
    };

    const response = await axios.patch(PATCH_URL, payload, {
      headers: {
        Authorization: "Bearer uskZUWYuDIOPLDcwkxLEWfI",
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Ошибка при обновлении поставки:", error);
    return null;
  }
};

const PATCH_PRODUCTS_URL =
  "https://true.tabs.sale/fusion/v1/datasheets/dstXFd44w7UBFj1Hto/records?viewId=viweo1seC0aMx&fieldKey=name"; // замените на актуальные viewId и datasheetId товаров

export const updateProductsQuantity = async (products, addedQuantity) => {
  try {
    // создаём новый payload для PATCH
    const payload = {
      records: products.map((product) => ({
        recordId: product.recordId,
        fields: {
          count: (product.fields.count || 0) + addedQuantity,
        },
      })),
      fieldKey: "name",
    };

    const response = await axios.patch(PATCH_PRODUCTS_URL, payload, {
      headers: {
        Authorization: "Bearer uskZUWYuDIOPLDcwkxLEWfI",
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Ошибка при обновлении количества товаров:", error);
    return null;
  }
};
