3.times do
  live_loop :flibble do
    sample :ambi_choir, rate: 0.3
    sample :bd_haus, rate: 1
    sleep 1
  end
  play 75
  sleep 1
  play 80
  sleep 1
  play 79
  sleep 1
  play 77
  sleep 1
end