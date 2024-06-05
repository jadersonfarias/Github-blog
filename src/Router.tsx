import { Routes, Route } from "react-router-dom";
import { Blog } from "./Page/Blog";
import { Post } from "./Page/Post";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/Post" element={<Post />} />
      </Route>
    </Routes>
  );
}
