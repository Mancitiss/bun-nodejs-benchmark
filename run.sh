
screen -S nodejs -d -m
screen -S nodejs -X stuff 'node ./nodejs-benchmark/index.js^M'
echo -e "\nwait 10 seconds for nodejs to start"
sleep 10
echo "running first test (returning 'Hello World!' from nodejs web server with 100 concurrent connections and 1 thread in 30 seconds)"
wrk -t1 -c100 -d30s http://localhost:3001
echo -e "\nwait 2 seconds before closing nodejs"
sleep 2
screen -S nodejs -X quit

echo "wait 10 seconds for CPU to cool down"
sleep 10

screen -S bun -d -m
screen -S bun -X stuff 'bun run ./bun-benchmark/src/index.ts^M'
echo -e "\nwait 10 seconds for bun to start"
sleep 10
echo "running first test (returning 'Hello World!' from bun web server with 100 concurrent connections and 1 thread in 30 seconds)"
wrk -t1 -c100 -d30s http://localhost:3000
echo -e "\nwait 2 seconds before closing bun"
sleep 2
screen -S bun -X quit

echo "wait 10 seconds for CPU to cool down"
sleep 10

screen -S nodejs -d -m
screen -S nodejs -X stuff 'node ./nodejs-benchmark/index.js^M'
echo -e "\nwait 10 seconds for nodejs to start"
sleep 10
echo "running second test (returning sum of numbers from 0 to 12345678 from nodejs web server with 100 concurrent connections and 1 thread in 30 seconds)"
wrk -t1 -c100 -d30s http://localhost:3001/calculate/12345679
echo -e "\nwait 2 seconds before closing nodejs"
sleep 2
screen -S nodejs -X quit

echo "wait 10 seconds for CPU to cool down"
sleep 10

screen -S bun -d -m
screen -S bun -X stuff 'bun run ./bun-benchmark/src/index.ts^M'
echo -e "\nwait 10 seconds for bun to start"
sleep 10
echo "running second test (returning sum of numbers from 0 to 12345678 from bun web server with 100 concurrent connections and 1 thread in 30 seconds)"
wrk -t1 -c100 -d30s http://localhost:3000/calculate/12345679
echo -e "\nwait 2 seconds before closing bun"
sleep 2
screen -S bun -X quit
