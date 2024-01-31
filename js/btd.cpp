// #include<bits/stdc++.h>
// using namespace std;

// int main(){
//    int t;
//    cin >> t;
//   while(t--){
//     int n;
//     cin >> n;
//     string s;
//     cin >> s;
//     int sum = 0, p = 0;
//     for (int i = n-1; i >= 0; --i){
//       sum += (s[i]-'0') * pow(2,p);
//       p++;
//     }
//     cout << sum;
//   }
// }

// #include<bits/stdc++.h>
// using namespace std;

// int main(){
//     int t;
//     cin >> t;
//     while(t--) {
//         int n;
//         cin >> n;
//         long long jiya_seq = 1;
//         for(int i = 0; i < n; ++i) {
//             int x;
//             cin >> x;
//             jiya_seq = jiya_seq * x;
//         }
//         if(jiya_seq % 10 == 2 || jiya_seq % 10 == 3 || jiya_seq % 10 == 5){
//             cout << "YES" << endl;
//         } else {
//             cout << "NO" << endl;
//         }
//     }
// }

#include<bits/stdc++.h>
using namespace std;

// int main() {
//   int n;
//   cin >> n;
//   int a[n];
//   int p = 1;
//     for(int i = 0; i < n; ++i){
//     cin >> a[i];
//   }
//   for(int i = 0; i < n; ++i){
//     p = p * a[i];
//   }
//   cout << p ;
// }



int main() {
    map<string, int> m; 
    int n;
    cin >> n;
    for(int i =0; i < n; ++i) {
        string s;
        cin >> s;
        m[s]++;
    }
    for(auto pr : m) {
        cout << pr.first << " " << pr.second << endl;
    }
    return 0;
}