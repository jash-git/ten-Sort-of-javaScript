function radixSort(nums)
{
	// 计算位数
	function getDigits(n)
	{
		let sum = 0;
		while(n)
		{
		sum++;
		n = parseInt(n / 10);
		}
		return sum;
	}
	// 第一维表示位数即0-9，第二维表示里面存放的值
	let arr = Array.from(Array(10)).map(() => Array());
	let max = Math.max(...nums);
	let maxDigits = getDigits(max);
	for(let i=0, len=nums.length; i<len; i++)
	{
		// 用0把每一个数都填充成相同的位数
		nums[i] = (nums[i] + '').padStart(maxDigits, 0);
		// 先根据个位数把每一个数放到相应的桶里
		let temp = nums[i][nums[i].length-1];
		arr[temp].push(nums[i]);
	}
	// 循环判断每个位数
	for(let i=maxDigits-2; i>=0; i--) {
		// 循环每一个桶
		for(let j=0; j<=9; j++)
		{
			let temp = arr[j]
			let len = temp.length;
			// 根据当前的位数i把桶里的数放到相应的桶里
			while(len--)
			{
				let str = temp[0];
				temp.shift();
				arr[str[i]].push(str);
			}
		}
	}
	// 修改回原数组
	let res = [].concat.apply([], arr);
	nums.forEach((val, index) => {
	nums[index] = +res[index];
	}) 
}
