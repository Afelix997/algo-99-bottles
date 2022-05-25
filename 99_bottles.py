def bottle_song(num):
  if num==0:
    return print("No Bottles")
  rem=num
  while rem>1:
    print(f"{rem} bottles of beer on the wall, {rem} bottles of beer.")
    if rem>2:
      print(f"Take one down and pass it around, {rem-1} bottles of beer on the wall.")
    else: 
      print("Take one down and pass it around, 1 bottle of beer on the wall.")
    rem=rem-1
  print(f"1 bottle of beer on the wall, 1 bottle of beer. \nTake one down and pass it around, no more bottles of beer on the wall. \nNo more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, {num} bottles of beer on the wall.")

bottle_song()
