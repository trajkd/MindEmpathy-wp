<?php /* Template Name: Blockchain */ ?>
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title><?php bloginfo( 'name' ) ?></title>

  <link rel="shortcut icon" href="/favicon.png" />

  <!-- Bootstrap core CSS -->
  <link href="/wp-content/themes/MEnet-wp/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="/wp-content/themes/MEnet-wp/static/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

  <!-- Custom styles for this template -->
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/MEnet-wp/static/css/boffi.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/MEnet-wp/static/css/header.css">
  <link href="/wp-content/themes/MEnet-wp/static/css/clean-blog.css" rel="stylesheet">

  <script src="/wp-content/themes/MEnet-wp/static/vendor/jquery/jquery.min.js"></script>
  <script type="text/javascript" src="https://unpkg.com/web3@0.20.5/dist/web3.min.js"></script>

</head>

<body>
    <div id="create" class="tabcontent">
        <h2>Create new coins (only for minter 0xFD7A7a854Cd128AC934eb1891Ab95ddC8b7E90a0)</h2>
        <div class="input-group">
            <h3>Address</h3>
            <input type="text" id="create-address" placeholder="Enter address" />
        </div>
        <div class="input-group">
            <h3>Amount</h3>
            <input type="number" id="create-amount" placeholder="Enter amount..." />
        </div>
        <div class="input-group">
            <button class="btn" id="button-create">Send</button>
        </div>
    </div>

    <div id="create" class="tabcontent">
        <h2>Send coins</h2>
        <div class="input-group">
            <h3>Address</h3>
            <input type="text" id="send-address" placeholder="Enter address" />
        </div>
        <div class="input-group">
            <h3>Amount</h3>
            <input type="number" id="send-amount" placeholder="Enter amount..." />
        </div>
        <div class="input-group">
            <button class="btn" id="button-send">Send</button>
        </div>
    </div>

    <div id="balances" class="tabcontent">
        <h2>Check balance of wallet</h2>
        <div class="input-group">
            <h3>Address</h3>
            <input type="text" id="balance-address" placeholder="Enter address..." />
        </div>
        <div class="input-group">
            <button class="btn" id="button-check">Check balance</button>
        </div>
    </div>

    <h1 class="text message">Balance: <span id="message"></span></h1>

    <div class="realtime">
      <h2>Realtime balances<h2>
      <div class="realtime-data">
      </div>
    </div>

    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.16.min.js"></script>
    <script src="/wp-content/themes/MEnet-wp/static/js/blockchain.js"></script>
</body>

</html>