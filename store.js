import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from './article';

export const store = configureStore({
    reducer: {
        [article.articleApi.reducerpath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});