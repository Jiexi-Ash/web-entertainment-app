import { useState, useEffect } from "react";
import MainLayout from "components/UI/MainLayout";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClicked = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <MainLayout>
      <div className="mt-6 mx-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet
        nostrum dolores veritatis pariatur dolore mollitia error autem,
        dignissimos molestiae iure doloribus, quas aspernatur illo odio
        perferendis a magnam suscipit. Nobis saepe quae eum sit totam ea.
        Accusantium dolor sed mollitia iusto inventore quia, eius, ab nostrum
        voluptates ducimus at non placeat! Omnis, mollitia sapiente aspernatur
        fuga eaque quam quo. Molestiae minima veniam nemo amet, repellat,
        dolorum voluptatibus illo sit perferendis placeat illum magni, doloribus
        sequi id laboriosam possimus ea quod obcaecati fuga. Tenetur architecto
        vero quam iste reprehenderit nobis. Aliquid, eius. Laudantium tempore
        error doloremque voluptatum ea, facere exercitationem totam sequi,
        quibusdam saepe ipsum. Assumenda dolores maiores accusantium beatae
        deserunt! Quod iure vero, fugit delectus atque molestiae error eum? At
        placeat dolores, possimus aperiam odit officiis facilis nisi cupiditate
        vero ducimus officia est tempore, magni reprehenderit illum! At officia
        eius possimus, eum consectetur quis eligendi quibusdam omnis quod
        corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis amet nostrum dolores veritatis pariatur dolore mollitia error
        autem, dignissimos molestiae iure doloribus, quas aspernatur illo odio
        perferendis a magnam suscipit. Nobis saepe quae eum sit totam ea.
        Accusantium dolor sed mollitia iusto inventore quia, eius, ab nostrum
        voluptates ducimus at non placeat! Omnis, mollitia sapiente aspernatur
        fuga eaque quam quo. Molestiae minima veniam nemo amet, repellat,
        dolorum voluptatibus illo sit perferendis placeat illum magni, doloribus
        sequi id laboriosam possimus ea quod obcaecati fuga. Tenetur architecto
        vero quam iste reprehenderit nobis. Aliquid, eius. Laudantium tempore
        error doloremque voluptatum ea, facere exercitationem totam sequi,
        quibusdam saepe ipsum. Assumenda dolores maiores accusantium beatae
        deserunt! Quod iure vero, fugit delectus atque molestiae error eum? At
        placeat dolores, possimus aperiam odit officiis facilis nisi cupiditate
        vero ducimus officia est tempore, magni reprehenderit illum! At officia
        eius possimus, eum consectetur quis eligendi quibusdam omnis quod
        corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis amet nostrum dolores veritatis pariatur dolore mollitia error
        autem, dignissimos molestiae iure doloribus, quas aspernatur illo odio
        perferendis a magnam suscipit. Nobis saepe quae eum sit totam ea.
        Accusantium dolor sed mollitia iusto inventore quia, eius, ab nostrum
        voluptates ducimus at non placeat! Omnis, mollitia sapiente aspernatur
        fuga eaque quam quo. Molestiae minima veniam nemo amet, repellat,
        dolorum voluptatibus illo sit perferendis placeat illum magni, doloribus
        sequi id laboriosam possimus ea quod obcaecati fuga. Tenetur architecto
        vero quam iste reprehenderit nobis. Aliquid, eius. Laudantium tempore
        error doloremque voluptatum ea, facere exercitationem totam sequi,
        quibusdam saepe ipsum. Assumenda dolores maiores accusantium beatae
        deserunt! Quod iure vero, fugit delectus atque molestiae error eum? At
        placeat dolores, possimus aperiam odit officiis facilis nisi cupiditate
        vero ducimus officia est tempore, magni reprehenderit illum! At officia
        eius possimus, eum consectetur quis eligendi quibusdam omnis quod
        corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis amet nostrum dolores veritatis pariatur dolore mollitia error
        autem, dignissimos molestiae iure doloribus, quas aspernatur illo odio
        perferendis a magnam suscipit. Nobis saepe quae eum sit totam ea.
        Accusantium dolor sed mollitia iusto inventore quia, eius, ab nostrum
        voluptates ducimus at non placeat! Omnis, mollitia sapiente aspernatur
        fuga eaque quam quo. Molestiae minima veniam nemo amet, repellat,
        dolorum voluptatibus illo sit perferendis placeat illum magni, doloribus
        sequi id laboriosam possimus ea quod obcaecati fuga. Tenetur architecto
        vero quam iste reprehenderit nobis. Aliquid, eius. Laudantium tempore
        error doloremque voluptatum ea, facere exercitationem totam sequi,
        quibusdam saepe ipsum. Assumenda dolores maiores accusantium beatae
        deserunt! Quod iure vero, fugit delectus atque molestiae error eum? At
        placeat dolores, possimus aperiam odit officiis facilis nisi cupiditate
        vero ducimus officia est tempore, magni reprehenderit illum! At officia
        eius possimus, eum consectetur quis eligendi quibusdam omnis quod
        corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis amet nostrum dolores veritatis pariatur dolore mollitia error
        autem, dignissimos molestiae iure doloribus, quas aspernatur illo odio
        perferendis a magnam suscipit. Nobis saepe quae eum sit totam ea.
        Accusantium dolor sed mollitia iusto inventore quia, eius, ab nostrum
        voluptates ducimus at non placeat! Omnis, mollitia sapiente aspernatur
        fuga eaque quam quo. Molestiae minima veniam nemo amet, repellat,
        dolorum voluptatibus illo sit perferendis placeat illum magni, doloribus
        sequi id laboriosam possimus ea quod obcaecati fuga. Tenetur architecto
        vero quam iste reprehenderit nobis. Aliquid, eius. Laudantium tempore
        error doloremque voluptatum ea, facere exercitationem totam sequi,
        quibusdam saepe ipsum. Assumenda dolores maiores accusantium beatae
        deserunt! Quod iure vero, fugit delectus atque molestiae error eum? At
        placeat dolores, possimus aperiam odit officiis facilis nisi cupiditate
        vero ducimus officia est tempore, magni reprehenderit illum! At officia
        eius possimus, eum consectetur quis eligendi quibusdam omnis quod
        corrupti? deserunt! Quod iure vero, fugit delectus atque molestiae error
        eum? At placeat dolores, possimus aperiam odit officiis facilis nisi
        cupiditate vero ducimus officia est tempore, magni reprehenderit illum!
        At officia eius possimus, eum consectetur quis eligendi quibusdam omnis
        quod corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis amet nostrum dolores veritatis pariatur dolore mollitia error
        autem, dignissimos molestiae iure doloribus, quas aspernatur illo odio
        perferendis a magnam suscipit. Nobis saepe quae eum sit totam ea.
        Accusantium dolor sed mollitia iusto inventore quia, eius, ab nostrum
        voluptates ducimus at non placeat! Omnis, mollitia sapiente aspernatur
        fuga eaque quam quo. Molestiae minima veniam nemo amet, repellat,
        dolorum voluptatibus illo sit perferendis placeat illum magni, doloribus
        sequi id laboriosam possimus ea quod obcaecati fuga. Tenetur architecto
        vero quam iste reprehenderit nobis. Aliquid, eius. Laudantium tempore
        error doloremque voluptatum ea, facere exercitationem totam sequi,
        quibusdam saepe ipsum. Assumenda dolores maiores accusantium beatae
        deserunt! Quod iure vero, fugit delectus atque molestiae error eum? At
        placeat dolores, possimus aperiam odit officiis facilis nisi cupiditate
        vero ducimus officia est tempore, magni reprehenderit illum! At officia
        eius possimus, eum consectetur quis eligendi quibusdam omnis quod
        corrupti? deserunt! Quod iure vero, fugit delectus atque molestiae error
        eum? At placeat dolores, possimus aperiam odit officiis facilis nisi
        cupiditate vero ducimus officia est tempore, magni reprehenderit illum!
        At officia eius possimus, eum consectetur quis eligendi quibusdam omnis
        quod corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis amet nostrum dolores veritatis pariatur dolore mollitia error
        autem, dignissimos molestiae iure doloribus, quas aspernatur illo odio
        perferendis a magnam suscipit. Nobis saepe quae eum sit totam ea.
        Accusantium dolor sed mollitia iusto inventore quia, eius, ab nostrum
        voluptates ducimus at non placeat! Omnis, mollitia sapiente aspernatur
        fuga eaque quam quo. Molestiae minima veniam nemo amet, repellat,
        dolorum voluptatibus illo sit perferendis placeat illum magni, doloribus
        sequi id laboriosam possimus ea quod obcaecati fuga. Tenetur architecto
        vero quam iste reprehenderit nobis. Aliquid, eius. Laudantium tempore
        error doloremque voluptatum ea, facere exercitationem totam sequi,
        quibusdam saepe ipsum. Assumenda dolores maiores accusantium beatae
        deserunt! Quod iure vero, fugit delectus atque molestiae error eum? At
        placeat dolores, possimus aperiam odit officiis facilis nisi cupiditate
        vero ducimus officia est tempore, magni reprehenderit illum! At officia
        eius possimus, eum consectetur quis eligendi quibusdam omnis quod
        corrupti?
      </div>
    </MainLayout>
  );
}
