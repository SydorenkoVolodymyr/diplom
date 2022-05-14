<?php include 'functions.php'; ?>
<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
    <!-- Bootstrap Font Icon CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

 <title>Admin</title>
</head>

<body style="background-color: #f7e7b4;">
<h1 class="text-center mt-5">Заявки</h1>
  <div class="container mb-5" style="background-color: #68c4af;">
    <div class="row">
      <div class="col-12">
        <table class="table table-striped table-hover mt-2">
          <thead class="table-danger">
            <th>ПІБ</th>
            <th>Вік</th>
            <th>Телефон</th>
            <th>Email</th>
            <th>Повідомлення</th>
            <th>Видалити</th>
          </thead>
          <tbody  style="background-color: white;">
            <?php foreach ($result as $res) { ?>
              <tr>
                <td><?php echo $res->Name; ?></td>
                <td><?php echo $res->Age; ?></td>
                <td><?php echo $res->Number; ?></td>
                <td class='block w-25'><?php echo $res->Email; ?></td>
                <td  class='block w-25'><?php echo $res->Comment; ?></td>
                <td class='block'>
                  <a href="" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete<?php echo $res->id; ?>">
                    <i class="fa fa-trash"></i>
                  </a>
                </td>
              </tr>
              <div class="modal fade" id="delete<?php echo $res->id; ?>" role="dialog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Точно видалити заявку "<?php echo $res->Name; ?>"?</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-footer">
                      <form action="?id=<?php echo $res->id; ?>" method="post">
                        <button type="submit" class="btn btn-primary btn-danger" name="delete">Так</button>
                      </form>
                    </div>

                  </div>
                </div>
              </div>
            <?php } ?>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</body>

</html>