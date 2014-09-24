import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;


public class Lines {

	public String LineInput() throws IOException
	{
		System.out.println(" Enter some small text and I'll make it big !! :D ");
		InputStream input = System.in;
		InputStreamReader read = new InputStreamReader(input);
		BufferedReader BR = new BufferedReader(read);
		
		return BR.readLine();
	}
	
	public void lowerToCapital(String input)
	{
		String result = "";
		
		for( int i = 0; i < input.length(); i++ )
		{
			char c = input.charAt(i);
			if( c >= 'a' && c <= 'z' )
			{
				c -= 32;
			}
			System.out.print(c);
			result = result + c;
		}
		//System.out.println(result);
	}
}
