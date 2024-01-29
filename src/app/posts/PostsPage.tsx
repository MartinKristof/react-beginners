export const PostsPage = () => {
  return (
    <section className="flex flex-col space-y-4 text-left">
      <div>
        <div className="mt-2">
          <label htmlFor="author" className="block mb-2 text-sm font-medium">
            Your name:
          </label>
          <input
            id="author"
            name="author"
            className="border border-slate-500 px-8 py-2 block p-2.5 w-full text-sm"
            placeholder="Some post"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="post" className="block mb-2 text-sm font-medium">
            Your post:
          </label>
          <textarea
            id="post"
            name="post"
            className="border border-slate-500 px-8 py-2 block p-2.5 w-full text-sm"
            placeholder="Some post"
            rows={4}
          />
        </div>
      </div>
      <div>
        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Submit
        </button>
      </div>
      <section className="space-y-4">
        <ul>
          <li>
            <div className="p-4 border border-stone-700 rounded my-3 flex justify-between gap-5 items-start">
              <div className="flex-none">
                <div className="flex-row">
                  <div>
                    <strong>Author</strong>
                  </div>
                  <div>
                    <em>2024-01-01</em>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-ellipsis overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos hymenaeos. Aenean fermentum risus id tortor. Etiam ligula
                  pede, sagittis quis, interdum ultricies, scelerisque eu. Nulla accumsan, elit sit amet varius semper,
                  nulla mauris mollis quam, tempor suscipit diam nulla vel leo. In dapibus augue non sapien. Donec vitae
                  arcu. Nulla non arcu lacinia neque faucibus fringilla. Fusce tellus odio, dapibus id fermentum quis,
                  suscipit id erat. Aliquam erat volutpat. Nullam dapibus fermentum ipsum. Praesent dapibus. Integer
                  tempor. Etiam dictum tincidunt diam. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. Fusce nibh. Sed convallis magna eu sem. Maecenas ipsum
                  velit, consectetuer eu lobortis ut, dictum at dui. Nullam lectus justo, vulputate eget mollis sed,
                  tempor sed magna. Pellentesque sapien. Aliquam id dolor. Duis sapien nunc, commodo et, interdum
                  suscipit, sollicitudin et, dolor. Aliquam erat volutpat. Duis viverra diam non justo. Praesent vitae
                  arcu tempor neque lacinia pretium.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
};
